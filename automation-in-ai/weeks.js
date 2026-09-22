// Automation in AI — weekly content (fall 2026)
// One entry per week. To register a video: set video to the YouTube embed URL
// ("https://www.youtube.com/embed/VIDEO_ID"). To add extra links: push {label, url} into links.
// The tutorial field is easy-English HTML shown on the week page. Edit freely — text only, no logic here.

const WEEK1_DATE = new Date("2026-09-02T00:00:00+09:00");

const WEEKS = {
  1: {
    noSubmit: true,   // 1주차는 제출이 없다 — 인트로만 했다 (작가 2026-09-07)
    name: "Getting Started — Introduction",
    build: "nothing. Week 1 was the introduction: what automation is, and how this course runs.",
    submit: "nothing. Week 1 had no assignment. Submissions start in Week 2.",
    video: "",
    coach: "Week 1 was an introduction only — no assignment, no login, no submission. If the student asks what they missed, give them the short version: automation means the computer does a repetitive task for you; this course builds one automation every week for the student's own field; the three tracks are A (work I do now), B (work I want to do), C (my work and study). Then tell them the only preparation for Week 2: bring a Google account and think of ONE repetitive task they do by hand. Do not ask them for a list of three tasks — that was never assigned.",
    links: [
      { label: "Week 1 slides (PDF)", url: "materials/W01_Slides.pdf" },
      { label: "Week 1 handout (PDF)", url: "materials/W01_Handout.pdf" },
    ],
    tutorial: `
      <h4>Week 1 was the introduction — there was no assignment</h4>
      <p>No homework, no login, no submission. We sat in E401 and talked about what this course is.
      If you missed it, here is the whole thing in one minute.</p>
      <h4>What is automation?</h4>
      <p><b>Automation</b> = the computer does a repetitive task for you, so you do not do it by hand.
      Instead of hiring a person for repetitive work, you set up a computer to do it. The four steps are the same either way:
      prepare the work, give the instructions, check the process, check the result. Only <i>who does the work</i> changes.</p>
      <h4>Two kinds of automation</h4>
      <p><b>Computer automation</b> follows a fixed rule and gives the same result every time — send the same reminder every Monday at 9am.
      <b>AI automation</b> needs judgment — read 100 different messages and write a different reply to each.
      Calculation, rules, copying &rarr; just a computer. Reading, writing, deciding &rarr; you need AI.</p>
      <h4>How this course runs</h4>
      <p>This is not a course about memorizing software menus. <b>You pick your own field</b>, and every week you automate
      one repetitive task from that field. After 15 weeks you have a working system, not a finished assignment.</p>
      <p>Three tracks, all equal, and you can change any time:
      <b>A.</b> work I do now (family shop, side job, online selling) &middot;
      <b>B.</b> work I want to do (a business idea) &middot;
      <b>C.</b> my work &amp; study (job applications, deadlines, documents).
      <b>Track C is not lower</b> — about half of every class starts there.</p>
      <p>Our tools are <b>Make.com</b> and <b>Notion</b>. Both free. No coding, not even a little.</p>
      <h4>The only thing to bring to Week 2</h4>
      <p>Your <b>Google account</b>, and <b>one repetitive task</b> you want to stop doing by hand. Think about that one task — that is the whole preparation.</p>
      <p>Nothing in mind? Borrow a field and change it later: small online shop &middot; tutoring &middot; delivery &middot; caf&eacute; &middot; clothes reselling &middot; photography &middot; translation &middot; travel guide &middot; importing goods from your country &middot; running an SNS account.</p>
      <h4>Curious before Week 2?</h4>
      <p>See what automation looks like in a real business.
      Free lessons: <a href="https://academy.make.com" target="_blank" rel="noopener">academy.make.com</a> &middot;
      the official Make channel on YouTube — start with the <i>What is Make?</i> video.</p>
    `,
  },

  2: {
    name: "Your class website, and your business",
    build: "nothing. Today you sign in, and you answer three questions about your business.",
    submit: "an interview with the AI assistant — who you are, what business you are thinking about, and which part of it you would automate. Talk to it in your own language.",
    video: "",
    coach: "Week 1 was an introduction with no assignment, so the student has NO written list — never ask them for one. Week 2 is the website and the three questions ONLY. The student is NOT building anything in Make today — if they ask about Make, tell them to create the free account and stop there; we open it properly in Week 3. Do not bring up groups: that is Week 3. Your job this week is the interview below, explaining what each question is FOR when they ask, and helping anyone who cannot sign in.",
    links: [
      { label: "Week 2 slides (PDF)", url: "materials/W02_Slides.pdf" },
      { label: "Week 2 handout (PDF)", url: "materials/W02_Handout.pdf" },
    ],
    interview: [
      "Introduce yourself. Where are you from, what are you studying, and what do you do outside class?",
      "What business are you thinking about? It can be work you already do, an idea you want to start, or your own studying and job hunting. One or two sentences.",
      "In that business, which part would you automate? Name one thing you do again and again by hand, and say why it is boring or slow.",
    ],
    tutorial: `
      <h4>Today you do two things</h4>
      <p><b>Sign in to this website.</b> And <b>answer three questions about your business.</b>
      No building today — for Make you only create a free account, and we open it properly next week.</p>
      <h4>Signing in</h4>
      <p>Your <b>student ID</b> (9 digits) and <b>the email address the school has for you</b> — the one you gave at admission, not a new one.
      The first sign-in locks that email to your ID so nobody else can use it. Wrong email? Raise your hand — ten seconds to unlock.</p>
      <p>Everything for this class lives here: every week's task and tutorial, your submissions, and your attendance.
      Later weeks stay locked until the day before their class. <b>Submitting during class is your attendance</b> — nothing separate, no name calling.
      You can fix your submission later and keep the attendance.</p>
      <h4>Submit by talking — and what each question is for</h4>
      <p>You do not fill a form. Press the button above, type <b>start</b>, and the assistant asks three questions, one at a time.</p>
      <ol>
        <li><b>Introduce yourself</b> — where you are from, what you study, what you do outside class.<br>
        <i>Why:</i> a whole class of you and one professor — this is how he learns who is in the room.
        <i>Feeds:</i> next week you form your own groups, and people find each other through what you write here.</li>
        <li><b>What business are you thinking about?</b> — <b>the one that matters most.</b><br>
        <i>Why:</i> every week for fifteen weeks you automate something from it — a form about it in Week 3, emails that answer themselves in Week 5, a working system in Week 15. You are not automating the professor's example; you are automating your own thing.<br>
        <i>Three ways to answer:</i> <b>A</b> work I do now (family shop, side job, online selling) &middot; <b>B</b> work I want to do (an idea you have been thinking about) &middot; <b>C</b> my work &amp; study (job applications, deadlines, documents).
        <b>C is not lower</b> — about half of every class starts there, and a visa deadline is a real repetitive task. You can change any time, but you need one today.</li>
        <li><b>Which part would you automate?</b> — one thing you do again and again by hand, and why it is slow.<br>
        <i>Why:</i> automation only works on repetitive work. If it happens once, there is nothing to automate.
        <i>Feeds:</i> this becomes the first thing you build, so pick the easiest one — you have fourteen more weeks.<br>
        <i>Good:</i> "copying orders into a sheet, every day." <i>Not yet:</i> "grow my business." If you cannot say when it happens and what you do with your hands, it is not ready.</li>
      </ol>
      <p><b>Write in your own language.</b> Nepali, Uzbek, Vietnamese, Urdu, Korean — the assistant answers in the same language and writes your submission in your language and in English. Do not lose your meaning to your English.
      At the end it shows a draft: <b>nothing is recorded until you press Submit.</b> Something wrong? Keep talking and it rewrites.</p>
      <p class="note">The assistant runs during class hours only.</p>
      <h4>Make — the account only</h4>
      <p>Go to <b>make.com</b> &rarr; <i>Get started free</i> &rarr; sign up <b>with Google</b>. No Google account? Sign up with your email address instead; it works exactly the same.
      That is all Make needs from you today. We open it properly next week.</p>
      <h4>Next week</h4>
      <p><b>Project 1</b> — you make a Google Form that introduces your business and asks people what they think, you share it, and an automation watches it and tells you when an answer arrives.
      Your first automation is not a toy: it brings you feedback on your own idea. We also form groups next week — nothing to do about it today.</p>
      <h4>Stuck?</h4>
      <p>Ask <b>3 people around you</b> first. Cannot sign in? Raise your hand and the professor comes to you. Or ask the assistant right here.</p>
      <h4>What gets recorded</h4>
      <p>Your submissions, the time you sent them, and <b>your chats with the AI assistant</b> are saved.
      The professor reads them to improve the class — if many of you get stuck on the same step, that step is taught again the next week.
      Nobody else sees them, and never other students. Please do not type passwords or bank details anywhere on this site.</p>
    `,
  },

  3: {
    name: "Project 1 — Your business idea, and what people think",
    build: "a Google account you can point to, a short survey, a Google Form that collects it, and a one-line pitch.",
    submit: "your Google account email, your form link, your response sheet link, and a one-line business intro.",
    video: "",
    coach: "This week has NO Make — the professor demos ONE module in Make at the front of the room, students do not open Make at all this week. Make starts for students next week, using the SAME Google account each student submits today, so getting the Google account right this week matters more than usual. (1) First confirm which Google account (email) they will use for their business form — this is one of the four things they submit. (2) Talk through their business idea and help design 4-5 survey questions in the early-stage-validation style — ask what people have ALREADY experienced, not opinions ('have you faced this' not 'would you like this'); cover: the problem, their current fix, how often/how much it bothers them, what they'd pay, who they are. (3) Help build the Google Form at forms.google.com (signed into that same account) with those questions. (4) Tell them: Responses → green sheet icon → Create a new spreadsheet, then submit one test answer themselves so a row appears. (5) Write ONE confident sentence introducing their business — this line, their name, and their character photo go on next week's public gallery page with a QR to their form, visible to the whole school, so make it real, not a placeholder. (6) Close by telling them: this same Google Form becomes a MODULE next week in Make, opened with the same Google account. If a student has no business idea yet, help them name one in two minutes from what they already do — the form matters more than a perfect idea.",
    links: [
      { label: "Week 3 slides (PDF)", url: "materials/W03_Slides.pdf" },
      { label: "Week 3 handout (PDF)", url: "materials/W03_Handout.pdf" },
    ],
    interview: [
      "Which Google account are you using for this project? Type the email address. Next week Make connects to this same account, so keep using it.",
      "Your business idea: read back what the student told you in Week 2 (it is in their earlier submissions) and ask them to confirm or change it — if there is nothing on record, ask for it in one or two sentences. Then let's design your survey together: 4–5 questions that ask what people have ALREADY experienced — the problem, how they solve it now, how often and how much it bothers them (1–5), what they would pay per month, and who they are. Write your questions here; I will help you make each one about the past, not an opinion.",
      "Paste the link to your Google Form. In the form, press Send → the link icon → Copy.",
      "Paste the link to your response spreadsheet. In the form open Responses → the green sheet icon, then copy the address of the sheet. Set Share → Anyone with the link → Viewer, so the professor can open it.",
      "Introduce your business in ONE sentence — what it is, and who it is for. This sentence goes on the class gallery with your name and character, and the whole school can see it.",
    ],
    // 직접 입력 창의 칸 제목 — 2번 물음은 조교에게 하는 지시라 학생에게 그대로 보이면 안 된다 (2026-09-16)
    interviewLabels: [
      "Your Google account email",
      "Your business idea, and your 4–5 survey questions",
      "Your Google Form link",
      "Your response spreadsheet link (shared: Anyone with the link → Viewer)",
      "Your business in ONE sentence",
    ],
    tutorial: `
      <h4>Project 1 — before you automate, you ask</h4>
      <p>Before Make touches anything, you need real people's answers about your idea. This week is only that
      — and no Make. The professor opens Make and places one module at the front of the room, just so you
      see what a module looks like. You do not open Make yourself this week.</p>
      <ol>
        <li>Sign into the <b>Google account</b> you will use for this project — and keep using it.</li>
        <li>Design <b>4–5 questions</b> that ask about real experience, not opinions.</li>
        <li>Build the <b>Google Form</b> and connect a <b>spreadsheet</b>.</li>
        <li>Write <b>one sentence</b> that introduces your business.</li>
      </ol>
      <h4>Step 0 — pick your Google account, and keep it</h4>
      <p>Whichever Google account you sign into <b>forms.google.com</b> with today is the account Make will
      connect to <b>next week</b>. Picking one now and sticking with it means no surprises next week —
      that is why it is one of the things you submit today.</p>
      <h4>Step 1 — design the questions (talk to the AI assistant first)</h4>
      <p>Good early surveys ask what people have <b>already</b> done, not what they <i>would</i> do. Cover these five:</p>
      <ul>
        <li><b>Problem</b> — have they faced this situation?</li>
        <li><b>Current fix</b> — how do they solve it now? Do they pay for anything already?</li>
        <li><b>Size</b> — how often does it happen, how much does it bother them (1–5)?</li>
        <li><b>Price</b> — if this were solved for them, what would they pay per month?</li>
        <li><b>Who</b> — one or two lines about who is answering.</li>
      </ul>
      <h4>Step 2 — the form</h4>
      <p>Go to <b>forms.google.com</b> → blank form. Keep it short — people stop at question six.
      A title, two or three lines on what your business is, then your 4–5 questions. Mix one rating (1–5)
      with open text.</p>
      <p>Open <b>Responses</b> → the green sheet icon → <b>Create a new spreadsheet</b>.</p>
      <h4>Step 3 — test it yourself</h4>
      <p>Fill in your own form once and submit. Open the spreadsheet — a new row appeared, by itself.
      <b>That is automation, before Make ever touches it.</b></p>
      <h4>Looking ahead — your form becomes a module, and it goes public</h4>
      <p>Next week, this exact Google Form becomes a <b>module</b> — the first piece of a Make scenario.
      And starting next week, your name, your character, and your one-line business pitch appear on a
      class gallery page with a QR code to your form — open to the whole school, not just this class.
      Write your one line like people you don't know will read it, because they will.</p>
      <h4>Submit</h4>
      <p>Talk to the AI assistant, then give four things: your <b>Google account email</b>, your <b>form link</b>,
      your <b>response sheet link</b>, and your <b>one-line business intro</b>.</p>
      <h4>Stuck?</h4>
      <p>Ask <b>3 people around you</b> first. Then raise your hand.</p>
      <h4>Finished early?</h4>
      <p>Share your form link with 3 more people right now — KakaoTalk, friends, family. Real answers
      before next week make a better scenario to build.</p>
    `,
  },

  4: {
    // 2026-09-16 작가 「W4 지메일 나에게 요약 이메일 하루에 한번」 · 공통 주제 「나를 자동화 한다」(09-17) — 2026-09-22 사부님 실측으로 다시 짬: 빈 시나리오 · 점 2개(시트 → 새 Gmail, 모으는 점은 W5) · Content 는 글자 + 물음 블록 + <br> · 받는 사람에 smit.ai.lab@gmail.com(사부님이 과제를 받아 확인) · 제출은 「메일 받았나 · 추가했나」로 판단 · 폰에서는 구글 허락 창이 안 눌려 연결은 PC 에서
    name: "Make, first connection — your answers, emailed to you",
    build: "your first Make scenario: Google Sheets → Gmail. Every new answer in your Week 3 sheet arrives as a readable email — to you and to the professor — checked once a day.",
    submit: "three things — did the email arrive, did you add smit.ai.lab@gmail.com, and one thing the answers tell you about your business.",
    video: "",
    coach: "Week 4: students open Make for the first time. Theme 'Automate yourself': automation protects your best hour, and the design is not finished until you decide what goes into the time it gives back; thinking comes from exercise, good places and good friends. Remind them in a plain sentence when it fits, with one easy question from their own life. Build from ZERO, TWO modules only (the Text aggregator is next week): Scenarios → + Create a new scenario → Google Sheets 'Watch New Rows' (Search by path, My Drive, their Week 3 spreadsheet, sheet 'Form Responses 1', headers Yes) → + → a NEW Gmail 'Send an email' — not the template, whose Gmail module is old ('restricted scopes' for personal @gmail). To: their own address, then Add recipient smit.ai.lab@gmail.com (the professor receives it and checks the work). Subject: 'W4 · name · New answer'. Content: for each question a short label, the question block, then <br> (Body type is Raw HTML, so Enter makes no new line); not the [bundle] block, which sends the row as code; their last line at the bottom (one thing for their body or one person to contact today). Connecting each account is the most important step: Create a connection → Sign in with Google → same account → tick every box → Continue; Gmail needs its own connection. Make the connections on the PC: on a phone Google's permission window is hard to confirm, which gives '403 — Method doesn't allow unregistered callers' → Credentials → delete that connection → make it again on the PC; the phone then uses it. Before Run once: right-click the Sheets module → Choose where to start → All → Save. A second Run once sends nothing unless there is a new row — to test again, fill in their own form once more. Schedule: toolbar 'Every 15 minutes' → Every day → Save → Activate scenario (each check costs a credit). No AI inside on purpose. Submission is judged by two facts: the email arrived (ask for the Gmail address that sent it, the subject and first lines) and smit.ai.lab@gmail.com is a recipient. When they type their address, the server checks the professor's inbox and adds a SYSTEM CHECK — go by that, never by their word alone. Then ask one thing the answers tell them about their business. If a connection still fails, ask for the exact error and send them to the professor — do not invent workarounds.",
    links: [
      { label: "Week 4 slides (PDF)", url: "materials/W04_Slides.pdf" },
      { label: "Week 4 handout (PDF)", url: "materials/W04_Handout.pdf" },
      { label: "Make lesson — Learn the basics", url: "https://help.make.com/learn-the-basics" },
      { label: "Make lesson — Create your first scenario (10 steps)", url: "https://help.make.com/create-your-first-scenario" },
      { label: "Make lesson — Expand your scenario (Step 6: Text aggregator)", url: "https://help.make.com/expand-your-scenario" },
      { label: "Make help — connect Google Sheets", url: "https://apps.make.com/google-sheets" },
      { label: "Make help — connect Gmail", url: "https://apps.make.com/google-email" },
    ],
    interview: [
      "Did the email from Make arrive in your Gmail? Type the Gmail address you connected in Make (the one that sent it), and paste the subject and the first lines.",
      "Did you add smit.ai.lab@gmail.com as a second recipient? If not, add it now and press Run once again (fill in your form once more first, so there is a new row).",
      "Read that email. What is one thing the answers tell you about your business idea — one thing you will change, or keep?",
    ],
    // 직접 입력 창의 칸 제목 — 3번 물음에 조교에게 하는 지시가 섞여 있어 학생에게는 따로 보인다
    interviewLabels: [
      "The Gmail address that sent it, and the email's subject and first lines",
      "Did you add smit.ai.lab@gmail.com as a recipient? (yes / no)",
      "One thing the answers tell you about your business",
    ],
    tutorial: `
      <h4>Week 4 — automate yourself</h4>
      <p>Once a day, Make checks your Week 3 sheet and emails <b>you</b> every new answer — and the professor too. Use the <b>same Google account</b> as last week. On your phone, open make.com in the <b>browser</b>.</p>
      <h4>Step 1 — start from zero</h4>
      <p>☰ → <b>Scenarios</b> → <b>+ Create a new scenario</b> → the big <b>+</b> → <b>Google Sheets</b> → <b>Watch New Rows</b>. Search by path · My Drive · your Week 3 spreadsheet · sheet <b>Form Responses 1</b> · headers Yes → Save. <b>Not the template</b> — its Gmail point is old and personal Gmail accounts cannot connect it.</p>
      <h4>Step 2 — connect each account (on the PC)</h4>
      <p><b>Create a connection</b> → <b>Sign in with Google</b> → the same account → <b>tick every box</b> → <b>Continue</b>. Gmail needs <b>its own</b> connection.</p>
      <p><b>Do the connections on the PC.</b> On a phone, Google's permission window is hard to confirm and you get <b>403 "Method doesn't allow unregistered callers"</b>. Then ☰ → Credentials → delete that connection → make it again on the PC. Your phone uses it after that.</p>
      <h4>Step 3 — an email to you, and to the professor</h4>
      <p>The small <b>+</b> → <b>Gmail</b> → <b>Send an email</b> (always add it new). To: your own address → Add recipient → <b>smit.ai.lab@gmail.com</b>. Subject: <b>W4 · your name · New answer</b>.</p>
      <p><b>Content</b>: for each question, type a label → click the question block → type <b>&lt;br&gt;</b>. Not the <b>[bundle]</b> block — it sends the row as code. At the bottom, your last line: one thing for your body, or one person to contact today.</p>
      <h4>Step 4 — run it, test again, set the clock</h4>
      <p>Right-click the Sheets point → <b>Choose where to start</b> → <b>All</b> → Save. <b>Run once</b> — one email for each answer.</p>
      <p>Run once again and nothing comes? Make sends <b>only new rows</b>. Fill in your own form once more → Run once.</p>
      <p>In the toolbar, tap <b>Every 15 minutes</b> → <b>Every day</b> → a time → <b>Save</b> → <b>Activate scenario</b>. Not every 15 minutes: every check uses a credit, even when nothing is new.</p>
      <h4>Make's own lessons</h4>
      <p>Make teaches the same build: <b>Create your first scenario</b> (a new Google Sheets row → a message, ten steps). <b>Expand your scenario</b> gathers many rows into one with a Text aggregator — that is next week. Links are below.</p>
      <h4>Stuck?</h4>
      <p>"Restricted scopes with @gmail.com"? That is an old Gmail point — delete it and add Gmail again from the +. No rows → wrong account, or an empty row in your sheet. No email → check Spam, or add a new row. Ask <b>3 people around you</b> first. Then raise your hand.</p>
    `,
  },

  5: {
    // 2026-09-16 작가 확정 W4~W8 — 「W4 지메일 나에게 요약 이메일 하루에 한번 / W5 AI 연결해서 보고서 작성하기 / W6 비지니스 사전신청 받기 / W7 비지니스 페이지 만들기 모두 연결하기 / W8 전시 및 발표」 · 「해당 비지니스가 매주 계속 발전되어야 한다」 — 자세한 튜토리얼은 그 주차 캠프가 쓴다
    name: "AI writes your business report",
    build: "an AI step that reads your answers and writes a short report on your business idea.",
    submit: "your report and one line on what you will change in your business because of it.",
    video: "",
    coach: "Week 5 adds AI to the Week 4 scenario: the collected answers go to an AI module that writes a short report — what people said, the patterns, what to change. The business grows here: help the student read the report critically and decide one real change to their idea. Do not claim things the answers do not show.",
    links: [],
    interview: [
      "Paste the report the AI wrote, or a link to it.",
      "What did the AI get right about your answers, and what did it miss?",
      "Because of this report, what is one thing you will change in your business idea?",
    ],
    tutorial: `
      <h4>Week 5 — AI reads your answers</h4>
      <p>Your daily summary goes to an <b>AI step</b>. It writes a short <b>report</b>: what people said, what repeats, what to change.</p>
      <h4>And your business grows</h4>
      <p>Do not just keep the report. Read it, disagree with it where it is wrong, and change one real thing in your idea.</p>
      <p><i>The full step-by-step guide opens the day before class.</i></p>
    `,
  },

  6: {
    // 2026-09-16 작가 확정 W4~W8 — 「W4 지메일 나에게 요약 이메일 하루에 한번 / W5 AI 연결해서 보고서 작성하기 / W6 비지니스 사전신청 받기 / W7 비지니스 페이지 만들기 모두 연결하기 / W8 전시 및 발표」 · 「해당 비지니스가 매주 계속 발전되어야 한다」 — 자세한 튜토리얼은 그 주차 캠프가 쓴다
    name: "Pre-registration — let people sign up",
    build: "a pre-registration form for your business, so interested people can leave their contact before you launch.",
    submit: "your pre-registration form link and how many sign-ups you want by Week 8.",
    video: "",
    coach: "Week 6 turns the idea into something people can join: a pre-registration form (name, contact, what they want) connected to Make, so every sign-up is recorded and the student is told. The survey asked 'is this a real problem?' — pre-registration asks 'will you sign up?'. Help them write a clear promise in one or two sentences at the top of the form.",
    links: [],
    interview: [
      "What does your pre-registration form promise people, in one or two sentences?",
      "Paste the link to your pre-registration form.",
      "How many sign-ups do you want by Week 8, and where will you share the form?",
    ],
    tutorial: `
      <h4>Week 6 — from 'is it real?' to 'will you join?'</h4>
      <p>Your survey asked if the problem is real. Now you ask people to <b>sign up</b> before you launch.</p>
      <p>Every sign-up is recorded by Make, and you hear about it.</p>
      <h4>And your business grows</h4>
      <p>Write the promise at the top of the form. One or two sentences a stranger understands.</p>
      <p><i>The full step-by-step guide opens the day before class.</i></p>
    `,
  },

  7: {
    // 2026-09-16 작가 확정 W4~W8 — 「W4 지메일 나에게 요약 이메일 하루에 한번 / W5 AI 연결해서 보고서 작성하기 / W6 비지니스 사전신청 받기 / W7 비지니스 페이지 만들기 모두 연결하기 / W8 전시 및 발표」 · 「해당 비지니스가 매주 계속 발전되어야 한다」 — 자세한 튜토리얼은 그 주차 캠프가 쓴다
    name: "Your business page — connect everything",
    build: "a simple page for your business that links your survey, your pre-registration form, and your automation.",
    submit: "your business page link and a short list of what is connected to what.",
    video: "",
    coach: "Week 7 builds one page that presents the business and connects the pieces made so far: the survey, the pre-registration form, the daily summary and the AI report. Keep the tool simple and free. Help them write the page for a stranger: what it is, who it is for, how to join. Check that every link opens without signing in.",
    links: [],
    interview: [
      "Paste the link to your business page.",
      "List what is connected: which form, which scenario, which report — one line each.",
      "Read your page as a stranger would. Which sentence makes someone sign up?",
    ],
    tutorial: `
      <h4>Week 7 — one page, everything connected</h4>
      <p>Make one simple page for your business. From that page people reach your <b>survey</b> and your <b>pre-registration form</b>, and behind it your <b>automation</b> keeps running.</p>
      <h4>And your business grows</h4>
      <p>Write the page for a stranger: what it is, who it is for, how to join. Open every link without signing in.</p>
      <p><i>The full step-by-step guide opens the day before class.</i></p>
    `,
  },

  8: {
    // 2026-09-16 작가 확정 W4~W8 — 「W4 지메일 나에게 요약 이메일 하루에 한번 / W5 AI 연결해서 보고서 작성하기 / W6 비지니스 사전신청 받기 / W7 비지니스 페이지 만들기 모두 연결하기 / W8 전시 및 발표」 · 「해당 비지니스가 매주 계속 발전되어야 한다」 — 자세한 튜토리얼은 그 주차 캠프가 쓴다
    name: "Exhibition & presentation",
    build: "nothing new — you show your business and the automation behind it.",
    submit: "the link people will open at the exhibition, and what you will show in your presentation.",
    video: "",
    coach: "Week 8 is the exhibition and presentation. Students show the business as it has grown since Week 2: the idea, what people said, the AI report, the pre-registration, the page, and the automation behind it. Help them rehearse a short, honest story: what changed because of the data. The time per person is set by the professor.",
    links: [],
    interview: [
      "Paste the link people will open at the exhibition.",
      "In three short lines: what your business was in Week 2, what changed, and why.",
      "What will you show live — which automation runs in front of people?",
    ],
    tutorial: `
      <h4>Week 8 — show what grew</h4>
      <p>You show your business as it is now, and how it got here: the idea, what people said, the AI report, the sign-ups, the page, and the automation behind it.</p>
      <p>Tell it as a short, honest story: what changed because of the answers.</p>
      <p><i>The exhibition details open the day before class.</i></p>
    `,
  },

  9: {
    name: "Project 2 · Peer Test",
    build: "the same skills on a different task from your field.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them pick task #2 from their list and apply one piece of peer feedback from Project 1.",
    links: [],
    interview: [
      "Which second task from your field did you automate, and why that one?",
      "Paste the link to your Project 2.",
      "Whose automation did you test, and what one thing would you change in it?",
    ],
    tutorial: `
      <h4>Second lap</h4>
      <p>Take your task list from Week 1. Pick a <b>different</b> repetitive task — and automate it. You will be surprised how fast the second one goes.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Read the peer feedback on your Project 1 (your progress page). Fix one thing they pointed at.</li>
        <li>Pick task #2 from your list. Sketch it on paper first: what is the Trigger? what are the Actions?</li>
        <li>Build it in a <b>new scenario</b> — do not overwrite Project 1.</li>
        <li>Test three times, submit the link.</li>
      </ol>
      <h4>Peer test again</h4>
      <p>New partner, same three questions: worked? useful 1–5? one suggestion. You are building a habit: <b>ship → get tested → improve</b>. That is how real products grow.</p>
      <h4>Advanced</h4>
      <p>Connect Projects 1 and 2 — can the output of one feed the other? One sheet as the shared memory of your field.</p>
    `,
  },

  10: {
    name: "Notion — Your Business Data",
    build: "a Notion space for your field, and data flowing into it by itself.",
    submit: "your Notion page + the automation that fills it — link + one line.",
    video: "",
    coach: "Two things in one week: help them name the Notion columns their field actually needs (Name, Status options, Date, Note), then map their form fields into those columns through Make. If they are slow, the Notion page alone is enough — the automation can come next week.",
    links: [],
    interview: [
      "Paste the link to your Notion page.",
      "What fills that page by itself? Name the trigger and the data it brings in.",
      "In one line: what do you no longer have to type by hand?",
    ],
    tutorial: `
      <h4>Where your data lives</h4>
      <p>Sheets hold rows. <b>Notion</b> holds your whole field — orders, customers, notes, plans — in one place you actually want to open.
      Today you build it <i>and</i> make it fill itself.</p>
      <h4>Part 1 — build the space (30 min)</h4>
      <ol>
        <li>Go to <b>notion.com</b> → sign up free (Google account is fine).</li>
        <li>New page → name it after your field ("Bobur's Shop", "My Job Search").</li>
        <li>Inside, type <b>/database</b> → choose <b>Table</b>.</li>
        <li>Columns that match your field: Name · Status (<i>Select</i> type: new / doing / done) · Date · Note.</li>
        <li>Add three real entries by hand — feel what belongs in each column.</li>
        <li><b>+ Add a view</b> → <b>Board</b>, grouped by Status. Same data, kanban board.</li>
      </ol>
      <h4>Part 2 — make it fill itself (40 min)</h4>
      <ol>
        <li>In Make, open your form scenario → add <b>Notion → Create a Database Item</b>.</li>
        <li>Connect Notion — give access only to the page you just made.</li>
        <li>Map the form answers into the columns: name → Name, request → Note, Status → "new".</li>
        <li>Run once → submit a test form → watch the card appear in the table <i>and</i> the Board.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <p>Your flow is now: form → sheet → email reply → Notion card. Four apps, zero hands.</p>
      <h4>Make it yours</h4>
      <p>Build the page you would actually open every morning. That is the difference between homework and a tool.</p>
      <h4>Advanced</h4>
      <p>Reverse direction: Notion trigger <b>Watch Database Items</b> — drag a card to "done", and Make emails the customer.</p>
    `,
  },

  11: {
    name: "AI Coding Day — say it, and it exists",
    build: "one small working tool of your own, made by describing it in one sentence.",
    submit: "your tool — link + the sentence you used.",
    video: "",
    coach: "Their tool will fail because the sentence is vague, not because the tool is broken. Push them to name three things: who uses it, what they see on screen, what happens when they press the button. Never write the sentence for them — ask the missing question instead.",
    links: [],
    interview: [
      "Paste the link to your tool.",
      "Paste the exact sentence you used to describe it.",
      "What did you have to change after the first try?",
    ],
    tutorial: `
      <h4>Today is different</h4>
      <p>No Make. No modules. Today you tell a computer what you want <b>in one sentence</b>, and it builds it.
      This is a whole day — the only one like it this semester.</p>
      <h4>What coding became</h4>
      <p>Coding is giving a computer instructions. It always was. The old way: you wrote those instructions in the computer's language, and that took years to learn.
      The new way: you write them in <b>your language</b>. So the hard part moved — from grammar to <b>knowing what you want</b>.</p>
      <blockquote>The clearer your picture, the better the machine builds it.</blockquote>
      <h4>Core steps</h4>
      <ol>
        <li>Pick <b>one small thing</b> your field needs. Not a whole website — one tool. A price calculator. A booking form. A checklist that remembers.</li>
        <li>Write <b>one sentence</b> that answers three questions: <b>who uses it</b>, <b>what they see</b>, <b>what happens when they press the button</b>.</li>
        <li>Paste the sentence into Claude (or ChatGPT). Wait. Something appears — press it, use it.</li>
        <li><b>Fix the sentence, not the tool.</b> If it came out wrong, your picture had a hole. Find the hole, write it in, run again.</li>
        <li>Submit the working thing <i>and</i> the sentence that made it.</li>
      </ol>
      <h4>Vague vs clear</h4>
      <p><b>Vague</b> — "make a useful website for my shop." Nobody knows what that is, including the AI.</p>
      <p><b>Clear</b> — "Make a one-page site where a customer types their name and menu choice, the order appears in a list below, and when the owner clicks Done the order disappears from the list."</p>
      <p>Not longer — <b>no empty spaces</b>. That is the difference.</p>
      <h4>Why this belongs in an automation course</h4>
      <p>Week 6 asked you: which step needs judgment? Today asks: what exactly do you want?
      Both are the same muscle — <b>seeing clearly</b>. Tools change every year. That does not.</p>
      <h4>Advanced</h4>
      <p>Connect today's tool to your Make scenario — when someone uses it, a row appears in your sheet, and your automation takes over from there.</p>
    `,
  },

  12: {
    name: "Project 3 · Peer Test",
    build: "a bigger automation with several steps.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them choose their most valuable flow and list its steps: trigger, router rule, and every action. Failure cases too.",
    links: [],
    interview: [
      "Paste the link to your Project 3.",
      "List the steps of your automation in order, one line each.",
      "Whose automation did you test, and what broke when you tried it?",
    ],
    tutorial: `
      <h4>The full chain</h4>
      <p>Your last practice project before the final. Use everything: form → AI → sheet + Notion + email, with a Router splitting paths. This one should look like a small product.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Pick the most valuable flow in your field — the one that costs you the most time every week.</li>
        <li>Draw it on paper first: every Trigger, every Action, every rule. (This drawing is practice for Week 13.)</li>
        <li>Build with at least 4 modules and 1 Router or Filter.</li>
        <li>Test the failure cases too: empty answers, wrong email, double submission.</li>
        <li>Submit the link.</li>
      </ol>
      <h4>Peer test — final round</h4>
      <p>Third partner, same three questions. By now you know what good feedback looks like — give the kind you want to receive.</p>
      <h4>Advanced</h4>
      <p>Add a daily summary: a scheduled scenario that counts today's new rows and sends you one evening email — "today: 4 orders, 2 urgent".</p>
    `,
  },

  13: {
    name: "Design Your System",
    build: "a one-page plan: every automation your field needs.",
    submit: "your design proposal — link + one line.",
    video: "",
    coach: "Help them write the system map: every repetitive task, marked done/next/later, and one line per planned automation. The test: someone else could build it.",
    links: [],
    interview: [
      "Paste the link to your one-page design.",
      "List every automation your field needs, one line each.",
      "Which one will you build first next week, and why?",
    ],
    tutorial: `
      <h4>From pieces to a system</h4>
      <p>You have built five or six automations. Today you <b>design the whole machine</b>: what should your field run by itself when the semester ends?</p>
      <h4>Core steps — write a one-page plan</h4>
      <ol>
        <li>Open a Google Doc or a Notion page. Title: "[Your field] — Automation System".</li>
        <li><b>Section 1 — My field</b>: three sentences. What, for whom, what repeats.</li>
        <li><b>Section 2 — The map</b>: list every repetitive task. Mark each: ✅ already automated (which week) · 🔜 will build next week · ⏳ later.</li>
        <li><b>Section 3 — The build plan</b>: for each 🔜, one line — Trigger → Actions → which apps.</li>
        <li><b>Section 4 — What it saves</b>: hours per week, honestly counted.</li>
        <li>Share the link and submit it.</li>
      </ol>
      <h4>The test of a good plan</h4>
      <p>Someone else could build it. If your partner cannot understand a line, it is not designed yet — it is only wished.</p>
      <h4>Advanced</h4>
      <p>Add cost: which parts stay on Make's free plan? What would the paid plan cost, and does the saved time pay for it?</p>
    `,
  },

  14: {
    name: "Build Your System",
    build: "the system you designed last week.",
    submit: "your working system — link + one line.",
    video: "",
    coach: "Help them prioritize: which planned item is highest value, and what is the smallest version that actually runs today.",
    links: [],
    interview: [
      "Paste the link to your working system.",
      "Which parts of last week's design did you build, and which did you leave out?",
      "In one line: what does your system now do without you?",
    ],
    tutorial: `
      <h4>Building day</h4>
      <p>The whole class is one long lab. You have your plan — today you make the 🔜 items real.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-13 plan. Pick the highest-value 🔜 item.</li>
        <li>Build it. Test it. Mark it ✅ in the plan.</li>
        <li>Repeat for the next item — as far as you get. Depth beats breadth: two working flows &gt; five broken ones.</li>
        <li>Connect the pieces: shared sheet, shared Notion, one naming style ("[Field] - order intake", "[Field] - daily summary").</li>
        <li>Update the plan document so it matches what actually runs — submit the link.</li>
      </ol>
      <h4>Prepare for the final</h4>
      <p>Next week: 3 minutes, everything live. Decide today which flow you will trigger on screen — and test it five times.</p>
      <h4>Advanced</h4>
      <p>Turn ON the one scenario your field really uses from now on. Watch the run history for a day. Congratulations — you are in production.</p>
    `,
  },

  15: {
    name: "Final Presentations",
    build: "nothing new — you present.",
    submit: "your 3-minute demo link, before class starts.",
    video: "",
    coach: "Rehearse the 3-minute final demo and sharpen the one sentence: why this system deserves attention (or money).",
    links: [],
    interview: [
      "Paste the link to your 3-minute demo.",
      "In one sentence: what does your system do, and for whom?",
      "Look back at your answer in Week 2. What changed in your business idea?",
    ],
    tutorial: `
      <h4>Three minutes, your whole system</h4>
      <p>The last stand-up. Timer on screen, order posted here, demo runs from the professor's PC — <b>submit your link before class</b>.</p>
      <h4>How to structure 3 minutes</h4>
      <ol>
        <li><b>0:00–0:30</b> — your field, and the system map (show your Week-13 plan for ten seconds).</li>
        <li><b>0:30–2:20</b> — <b>trigger the main flow live</b>. Form in, AI reply out, Notion card appears. Let the machine speak.</li>
        <li><b>2:20–3:00</b> — what it saves you per week, and the one thing you will automate next.</li>
      </ol>
      <h4>What is graded (8 points)</h4>
      <p>It runs · it fits your real field · you can explain <i>why</i> each piece exists. Polish matters less than truth — a small system that really runs beats a big diagram.</p>
      <h4>After this course</h4>
      <p>Your Make account, your Notion, your system — they leave with you. The habit you built — <i>see a repeated task, automate it</i> — is the actual grade. Keep it running.</p>
    `,
  },
};
