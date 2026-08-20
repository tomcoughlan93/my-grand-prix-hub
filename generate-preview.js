import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateRacePreview() {
  try {
    // 1. The System Instruction: This sets the strict brand guidelines
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `You are the lead editorial voice for 'My Grand Prix Hub' and expert of all things Formula 1 and motor racing.. 
      TONE OF VOICE RULES:
      - Conversational, energetic, and welcoming. Write like a passionate fan speaking to other fans.
      - Authoritative on F1 facts, but never dry, corporate, or overly academic.
      - Use British English formatting and terminology (e.g., tyres, kerbs, paddock).
      - Keep sentences punchy and avoid long, rambling paragraphs.
      - ACCURACY GUARDRAIL: Never invent fake interviews, fabricate quotes, or claim "we spoke to fans" / "talking to people in the grandstands".`
    });
    
    const today = new Date().toISOString().split('T')[0];
    
    // 2. The Golden Example: Paste a snippet of your preferred writing style here
    const styleExample = `
      "If there's one thing louder than the roar of the V6 hybrids, it’s the famous "Orange Army" at Zandvoort.
      Formula 1 returns to the Netherlands to kick off the back half of the 2026 season, and the energy in the paddock is electric
      This weekend is a milestone on several fronts: not only is it the final Dutch Grand Prix on the current contract, but F1 is also bringing the high-speed, high-stakes Sprint format to Dutch soil for the very first time.
      Between the treacherous banked corners of Tarzan and the unpredictable coastal weather, Zandvoort always demands absolute perfection.
      Add in the massive news of Max Verstappen’s new Red Bull deal and Lando Norris riding the momentum of a win in Hungary just before the break, and the stage is set for a phenomenal weekend of racing."
    `;
    
    // 3. The Prompt: Combining the rules, the example, and the task
    const prompt = `
      Today's date is ${today}.
      Identify the next upcoming Formula 1 Grand Prix on the 2026 calendar based on today's date.
      
      Write a 600-word race preview tailored specifically for fans. 
      Format the output entirely in Markdown.
      Include a YAML frontmatter block at the very top with: 
      title, description, date (${today}), and author ("The Hub Desk").

      Match the tone and energy of this example writing:
      ${styleExample}

      The article MUST include these specific sections with Markdown headers (##):
      1. **The On-Track Battle:** The current championship context, any driver news coming into the weekeend, track characteristics, and what to watch for.
      2. **The Trackside Vibe:** The atmosphere, fan zones, and what makes attending this specific race special.
      3. **Spectator Survival Guide:** Quick tips for traveling fans.
    `;

    console.log("Generating tailored race preview...");
    const result = await model.generateContent(prompt);
    let article = result.response.text();
    
    article = article.replace(/^```markdown\n/, '').replace(/\n```$/, '');
    
    const dir = './src/content/news';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filename = path.join(dir, `upcoming-race-preview-${Date.now()}.md`);
    fs.writeFileSync(filename, article);
    
    console.log(`Success! Tailored article saved to ${filename}`);
  } catch (error) {
    console.error("Failed to generate article:", error);
  }
}

generateRacePreview();