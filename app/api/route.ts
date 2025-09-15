import * as Server from '@common/server';
import * as Constants from '@common/constants';

export async function GET(request: Request) {
  const response = new Response();
  
  // Note: CORS handling might need to be adapted for App Router
  // await Server.cors(request, response);

  return Response.json({
    success: true,
    message: 'hey there, friend.',
  });
}