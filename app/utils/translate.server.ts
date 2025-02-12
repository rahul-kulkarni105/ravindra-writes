import { Translate } from "@google-cloud/translate/build/src/v2";

const translate = new Translate({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  key: process.env.GOOGLE_CLOUD_API_KEY,
});

export async function translateText(text: string, from: string, to: string) {
  try {
    const [translation] = await translate.translate(text, { from, to });
    return translation;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}
