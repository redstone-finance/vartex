import KoiLogs from "koi-logs";
import { Request, Response } from "express";

export const koiLogger = new KoiLogs("./");

export async function koiLogsRoute(
  request: Request,
  response: Response
): Promise<void> {
  koiLogger.koiLogsHelper(request, response);
}

export async function koiLogsRawRoute(
  request: Request,
  response: Response
): Promise<void> {
  koiLogger.koiRawLogsHelper(request, response);
}
