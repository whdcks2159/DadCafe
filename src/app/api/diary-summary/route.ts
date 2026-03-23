import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API 키 미설정' }, { status: 503 });
  }

  const { entries, babyAgeMonths } = await req.json();
  if (!entries?.length) {
    return NextResponse.json({ error: '일기 항목이 없습니다.' }, { status: 400 });
  }

  const entriesText = entries
    .map((e: { date: string; text: string; emotions: string[]; actions: string[] }) =>
      `[${e.date}] 감정: ${e.emotions.join(', ')} / 활동: ${e.actions.join(', ')}\n${e.text}`
    )
    .join('\n\n');

  try {
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: `아이 ${babyAgeMonths}개월 아빠의 이번 달 육아일기입니다. 따뜻하고 감동적인 한 달 요약을 3~4문장으로 써주세요. 아빠의 성장과 아이와의 특별한 순간을 담아주세요.\n\n${entriesText}`,
        },
      ],
    });

    const summary = msg.content[0].type === 'text' ? msg.content[0].text : '';
    return NextResponse.json({ summary });
  } catch {
    return NextResponse.json({ error: '요약 생성 실패' }, { status: 500 });
  }
}
