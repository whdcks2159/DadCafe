import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `당신은 "대디 AI"입니다. 한국의 예비 아빠와 초보 아빠를 위한 임신·출산·육아 전문 AI 가이드입니다.

규칙:
- 항상 한국어로 답변하세요.
- 따뜻하고 공감적인 톤을 유지하세요.
- 아빠의 관점에서 실용적이고 구체적인 조언을 제공하세요.
- 의학적 판단이 필요한 경우 반드시 전문의 상담을 권고하세요.
- 답변은 300자 이내로 간결하게 하세요.
- 지시형 문체를 사용하세요 (예: "이렇게 하세요", "이것을 준비하세요").`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'AI 기능은 API 키 설정 후 사용 가능합니다.' },
      { status: 503 }
    );
  }

  const { question, stage } = await req.json();
  if (!question?.trim()) {
    return NextResponse.json({ error: '질문을 입력해주세요.' }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });
  const userMessage = stage ? `[${stage} 단계 아빠의 질문] ${question}` : question;

  try {
    const stream = await client.messages.stream({
      model: 'claude-opus-4-5',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    });

    return new Response(stream.toReadableStream(), {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (e) {
    return NextResponse.json({ error: '응답 생성 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
