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
    name: "Project 1 — Your business, and what people say",
    build: "a Google Form about your business, and the automation that watches it.",
    submit: "your form link + one line about what you are asking people.",
    video: "",
    coach: "This is the first week students build in Make. The project: a Google Form that introduces their business and asks people what they think, feeding a Google Sheet, with a Make scenario that notifies them when a new answer arrives. Keep it to ONE trigger and ONE action — no conditions yet, that is next week. The most common failure is the Google connection: tell them to remove it and connect again. If a student has not decided their business yet, help them name one in two minutes from what they already do, then move on — the form matters more than a perfect idea.",
    links: [],
    tutorial: `
      <h4>Project 1 — one thing, in three steps</h4>
      <p>Your first automation is not a toy. It brings you <b>real feedback on your own business idea</b>, from real people.</p>
      <ol>
        <li>A <b>Google Form</b> — you introduce your business and ask people what they think.</li>
        <li>You <b>share it</b> — classmates, friends, family.</li>
        <li>An <b>automation watches it</b> — every new answer lands in your sheet, and Make tells you the moment one arrives.</li>
      </ol>
      <h4>Step 1 — the form</h4>
      <p>Go to <b>forms.google.com</b> → blank form. Keep it short — people stop at question six.</p>
      <ul>
        <li>A title and two or three lines that say <b>what your business is</b>. This part is advertising, not a survey.</li>
        <li><b>3–5 questions.</b> Ask what you actually want to know: would you use this, what would you pay, what is missing, what stops you.</li>
        <li>Mix one rating question (1–5) with one open text question. Numbers are easy to read, sentences tell you why.</li>
      </ul>
      <p>In the form, open <b>Responses</b> → the green sheet icon → <b>Create a new spreadsheet</b>. Every answer now lands there by itself.</p>
      <h4>Step 2 — the automation</h4>
      <ol>
        <li>In Make, <b>Create a new scenario</b> → the big <b>+</b> → search <b>Google Sheets</b> → <b>Watch New Rows</b>. This is your <b>Trigger</b>.</li>
        <li><b>Connect</b> your Google account, pick the spreadsheet your form created, and pick the tab.</li>
        <li>Click the <b>+</b> on the right → search <b>Gmail</b> → <b>Send an email</b>. Put your own address in "To". This is your <b>Action</b>.</li>
        <li>In the email body, click the blue fields from the left panel to drop the answers in. That is <b>mapping</b> — carrying a value from one node to the next.</li>
        <li><b>Run once</b> → fill in your own form → watch the email arrive.</li>
        <li><b>Turn the scenario OFF</b> when you finish testing. Free Make = 1,000 operations a month.</li>
      </ol>
      <h4>Step 3 — share it and watch</h4>
      <p>Send the form link to your KakaoTalk group, your friends, your family. Ten answers is already useful. You will read them next week.</p>
      <h4>Submit</h4>
      <p>Talk to the AI assistant as usual: give your <b>form link</b> and <b>one line</b> about what you are asking people and why.
      Also draw it on the A4: <b>Form → Sheet → Email</b>, three boxes and two arrows.</p>
      <h4>Stuck?</h4>
      <p>Ask <b>3 people around you</b> first. Almost every problem this week is the <b>Google connection</b> — remove it in Make and connect again; it works the second time.
      Then raise your hand.</p>
      <h4>Advanced — finished early?</h4>
      <p>One Trigger can feed more than one Action. Add a second Action after the email — <b>Google Sheets → Add a Row</b> into a second sheet called <i>Log</i>, so every answer is emailed <i>and</i> recorded separately.</p>
    `,
  },

  4: {
    name: "Conditions & Filters · Field Talk 1",
    build: "a filter on your form answers — so you only hear about the ones that matter.",
    submit: "your automation with a condition — link + one line. Plus your 1-minute field talk.",
    video: "",
    coach: "Two things this week. (1) Field Talk: each group presents, one minute per person — help them say their business in one sentence, not read a script. (2) Conditions: add a Filter between the trigger and the action of the Project 1 scenario, so the email only fires when the answer meets a condition — a low rating, a specific choice, a non-empty comment. Keep it to ONE condition. If a student has no form answers yet, they can fill their own form a few times to test.",
    links: [],
    tutorial: `
      <h4>Why a filter</h4>
      <p>Last week every answer sent you an email. With fifty answers that is fifty emails, and you stop reading them.
      A <b>filter</b> sits between two nodes and lets only some things through. Now you hear about the answers that matter.</p>
      <h4>Add one condition</h4>
      <ol>
        <li>Open your Project 1 scenario. Click the <b>line</b> between the two nodes — a wrench appears → <b>Set up a filter</b>.</li>
        <li>Give the filter a name you will understand later: <i>"only unhappy answers"</i>.</li>
        <li>Pick the field from the left panel, choose the operator, type the value. For example:
          rating <b>less than</b> 3 · comment <b>is not empty</b> · choice <b>equals</b> "I would pay for this".</li>
        <li><b>Run once</b> and test both ways — one answer that passes, one that does not. Watch which one reaches the email.</li>
      </ol>
      <p><b>One condition is enough this week.</b> You can add more later; two conditions at once is where people get lost.</p>
      <h4>Field Talk 1 — one minute per person</h4>
      <p>Your group comes up together. Each person says, in about a minute:</p>
      <ul>
        <li><b>What your business is</b> — one sentence.</li>
        <li><b>What you asked people</b> — and what surprised you in their answers.</li>
        <li><b>What you would automate next.</b></li>
      </ul>
      <p>No slides. Do not read from your phone. The point is to say your own business out loud in front of people — that is the skill.</p>
      <h4>Submit</h4>
      <p>Talk to the AI assistant: give your <b>scenario link</b> and <b>one line</b> saying what your filter lets through and why you chose it.
      On the A4, draw the same picture as last week with the filter in the middle: <b>Form → Sheet → [filter] → Email</b>.</p>
      <h4>Stuck?</h4>
      <p>The filter never passes anything? Check that you picked the field from the <b>left panel</b> and did not type the field name by hand.
      Check the operator — <i>text</i> operators and <i>number</i> operators are different lists.</p>
    `,
  },

  5: {
    name: "Email Automation",
    build: "an email that sends itself.",
    submit: "one automatic reply from your field — link + one line.",
    video: "",
    coach: "Help them find the message they send most often and draft the reply template together, with the mapped fields marked.",
    links: [],
    tutorial: `
      <h4>The task everyone repeats</h4>
      <p>Answering the same message again and again — every shop, every freelancer, every job-seeker knows it.
      Today the reply writes and sends itself.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Take your Week-4 scenario (form → sheet → email to you).</li>
        <li>Change the last module: Gmail <b>Send an email</b> → "To" = the <b>email answer from the form</b> (map it).</li>
        <li>Write a warm template: "Hi [name], thank you! We received your [request]. We will reply within one day."
          Map [name] and [request] from the row.</li>
        <li>Test with your own email as the customer. Read what arrives — would you be happy to receive it?</li>
        <li>Extra Action: add <b>Google Sheets → Update a Row</b> to mark Status = "replied". One trigger, two actions.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>Make it yours</h4>
      <p>What message do you send most often in your field? A price list? Directions? "Your order shipped"? An application follow-up? Automate that exact one.</p>
      <h4>Advanced</h4>
      <p>Explore Gmail's <b>Watch Emails</b> trigger: when a mail with a certain label arrives, Make can act on it.
      Search "Gmail" at <a href="https://help.make.com" target="_blank" rel="noopener">help.make.com</a>.</p>
    `,
  },

  6: {
    name: "AI Inside Your Automation",
    build: "an AI step inside your Make scenario.",
    submit: "AI writing your customer reply — link + one line.",
    video: "",
    coach: "Help them write the AI prompt for their auto-reply: role, tone, what to never promise. Test it against 2-3 fake customer messages in the chat.",
    links: [],
    tutorial: `
      <h4>From template to thinking</h4>
      <p>Last week your reply was a fixed template. Today an <b>AI writes each reply</b> — reading what the person asked, answering in your voice. This is where "Automation" meets "AI".</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-5 scenario.</li>
        <li>Between the Trigger and Gmail, add an <b>AI module</b> (we set up the class key together in the lab — do not buy anything yourself).</li>
        <li>Write the AI instruction (the <b>prompt</b>): "You reply for [your field]. Be short, warm, easy English. The customer wrote: [map the form answer]."</li>
        <li>Map the AI's output text into the Gmail body.</li>
        <li>Test with three different fake requests. Read every reply — does it sound like you? Fix the prompt, not the reply.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>One warning</h4>
      <p>Never let AI send money-related or promise-related answers without checking. In real business, AI drafts — you decide what auto-sends.</p>
      <h4>Advanced</h4>
      <p>Ask the AI for two outputs at once: a reply <i>and</i> a one-word category (order / question / complaint).
      Route by category with a Router — different answers for different kinds of mail.</p>
    `,
  },

  7: {
    name: "Project 1 · Peer Test",
    build: "one complete automation combining weeks 2–6.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them decide which pieces from weeks 2-6 combine into one complete flow, and define 'done' for it. Remind them peer feedback is part of the task.",
    links: [],
    tutorial: `
      <h4>Put it together</h4>
      <p>You now know: Trigger &amp; Action · filters · forms → sheets · email · AI. Today you build <b>one complete flow for your field</b>, start to finish.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Choose one real flow: request comes in → gets recorded → gets answered.</li>
        <li>Build it: Form → Sheet → (Filter) → AI reply → Gmail → mark as done.</li>
        <li>Test it yourself three times with different inputs.</li>
        <li>Submit your form's public link here — your partner needs to use it.</li>
      </ol>
      <h4>Peer test (20 minutes, in class)</h4>
      <p>The site assigns you a partner. Open their link and <b>really use it</b> — fill their form, watch what happens. Then answer three questions on their submission:
      ① Did it work? ② Is it useful for their field, 1–5? ③ One suggestion.
      Automation is honest: it runs or it does not. <b>Leaving feedback is part of this week's task.</b></p>
      <h4>Advanced</h4>
      <p>Add error handling: what happens when someone leaves the email field empty? Add a filter so the scenario does not crash.</p>
    `,
  },

  8: {
    name: "Midterm Presentations",
    build: "nothing new — you present.",
    submit: "your 2-minute demo link, before class starts.",
    video: "",
    coach: "Rehearse the 2-minute midterm demo: 20s field, 70s live trigger, 30s what it saves. Time it in the chat.",
    links: [],
    tutorial: `
      <h4>Two minutes, running live</h4>
      <p>Everyone presents. Timer on screen — at 2:00 the mic moves on. No exceptions, no slides needed.</p>
      <h4>How to structure 2 minutes</h4>
      <ol>
        <li><b>0:00–0:20</b> — your field, one line. What task you automated.</li>
        <li><b>0:20–1:30</b> — <b>trigger it live</b>: fill your form on the screen, let everyone watch the row appear and the reply arrive.</li>
        <li><b>1:30–2:00</b> — one sentence: what this saves you every week.</li>
      </ol>
      <h4>Rules</h4>
      <p>Your demo runs from the professor's PC — <b>submit your link here before class starts</b>. Presentation order is posted on this site. Two people before your turn, wait in the front row. Questions go to comments on your submission, not out loud.</p>
      <h4>If your automation is broken</h4>
      <p>Present anyway: show the scenario, explain where it stops, say what you tried. An honest broken demo scores better than no demo.</p>
    `,
  },

  9: {
    name: "Project 2 · Peer Test",
    build: "the same skills on a different task from your field.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them pick task #2 from their list and apply one piece of peer feedback from Project 1.",
    links: [],
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
