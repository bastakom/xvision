import { Resend } from "resend";

const usermail = process.env.MARKNAD_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, phone, tid, questions, initialQuestion } =
    await req.json();

  const formattedQuestions = questions
    .map((q: { question: string; answer: string }) => {
      return `<p>${q.question}: ${q.answer}</p>`;
    })
    .join("");

  const formattedInitialQuestion = initialQuestion
    .map((q: { initialQuestion: string; answer: string }) => {
      return `<p>${q.initialQuestion}: ${q.answer}</p>`;
    })
    .join("");

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
    <h1>Notifikation: Bokningakonsultation</h1>
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <p>Tel: ${phone}</p>
      <p>Tid: ${tid}</p>
      ${formattedInitialQuestion}
      ${formattedQuestions}
      <p>Meddelande: ${message}</p>
    </div>
  `;
  try {
    const { data, error } = await resend.emails.send({
      from: "Notifikation Kontakt Form <onboarding@resend.dev>",
      to: [`${usermail}`],
      subject: `Notifikation Kund ${name}`,
      html: messageBody,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
