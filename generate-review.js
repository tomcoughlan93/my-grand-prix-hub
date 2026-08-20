import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateRaceReview() {
  try {
    // 1. The System Instruction: Keeps your brand voice consistent
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `You are the lead editorial voice for 'My Grand Prix Hub' and expert of all things Formula 1 and motor racing.. 
      TONE OF VOICE RULES:
      - Conversational, energetic, and welcoming. Write like a passionate fan speaking to other fans.
      - Authoritative on F1 facts, but never dry, corporate, or overly academic.
      - Use British English formatting and terminology (e.g., tyres, kerbs, paddock).
      - Keep sentences punchy and avoid long, rambling paragraphs.
      - ACCURACY GUARDRAIL: Never invent fake interviews, fabricate quotes, or claim "we spoke to fans" / "talking to people in the grandstands". Describe the visible atmosphere, crowd reactions, and overall fan reception without pretending to have conducted on-the-ground interviews.`
    });
    
    const today = new Date().toISOString().split('T')[0];
    
    // 2. The Golden Example: Tailored for post-race drama and atmosphere
    const styleExample = `
      "The Formula 1 paddock can finally breathe a collective sigh of relief as the summer shutdown begins, but the shockwaves from the Hungarian Grand Prix will undoubtedly echo throughout August.
      Often dubbed "Monaco without the walls," the tight, twisty, and sweltering layout of the Hungaroring always pushes drivers and machines to their absolute limits, and this year’s race delivered relentless drama.
      Lando Norris bounced back from an early error to claim a crucial victory for McLaren, ultimately capitalizing on a heartbreaking late-race retirement for his teammate Oscar Piastri.
      With Max Verstappen securing a hard-fought second place for Red Bull and Mercedes' Championship leader Kimi Antonelli proving his mettle with yet another impressive podium, the championship narrative has been blown wide open just as the teams pack up for their well-earned break."
    `;
    
    // 3. The Prompt: Looking backward at the weekend that just happened
    const prompt = `
      Today's date is ${today}.
      Look at the 2026 Formula 1 calendar and identify the most recently concluded Grand Prix based on today's date.
      
      Write a 600-word post-race review and weekend debrief tailored specifically for fans. 
      Format the output entirely in Markdown.
      Include a YAML frontmatter block at the very top with: 
      title, description, date (${today}), and author ("The Hub Desk").

      Match the tone and energy of this example writing:
      ${styleExample}

      The article MUST include these specific sections with Markdown headers (##):
      1. **Race Weekend Debrief:** The key drama, the podium battle, tyre strategy, and the turning points of the race.
      2. **Drive of the Day & Unsung Heroes:** Standout performances across the grid, not just the race winner.
      3. **Trackside Atmosphere & Circuit Verdict:** The observable energy in the grandstands, crowd noise, and the overall fan experience of the circuit (describe the collective vibe—do not invent quotes or state that we conducted interviews).
    `;

    console.log("Generating post-race review...");
    const result = await model.generateContent(prompt);
    let article = result.response.text();
    
    // Cleanup: Removes Markdown code fences if the AI includes them
    article = article.replace(/^```markdown\n/, '').replace(/\n```$/, '');
    
    const dir = './src/content/news';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save as a review file
    const filename = path.join(dir, `race-review-${Date.now()}.md`);
    fs.writeFileSync(filename, article);
    
    console.log(`Success! Post-race review saved to ${filename}`);
  } catch (error) {
    console.error("Failed to generate article:", error);
  }
}

generateRaceReview();