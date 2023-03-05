import { confirmationToSender, receiveMessage } from '@/app/{lib}/nodemailer';
import { NextResponse } from 'next/server';

type Props = {
  name: string;
  email: string;
  message: string;
};

export async function POST(data: any) {
  const contact: Props = await data.json();

  const promise = [
    await confirmationToSender(contact.email),
    await receiveMessage(contact.name, contact.email, contact.message),
  ];

  const [senderConfirmation, receivedMessage] = await Promise.all(promise);
  return NextResponse.json({ senderConfirmation, receivedMessage });
}
