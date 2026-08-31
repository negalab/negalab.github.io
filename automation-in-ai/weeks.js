// Automation in AI — weekly content (fall 2026)
// One entry per week. To register a video: set video to the YouTube embed URL
// ("https://www.youtube.com/embed/VIDEO_ID"). To add extra links: push {label, url} into links.
// The tutorial field is easy-English HTML shown on the week page. Edit freely — text only, no logic here.

const WEEK1_DATE = new Date("2026-09-02T00:00:00+09:00");

const WEEKS = {
  1: {
    name: "Getting Started",
    build: "your seat, your accounts, and your task list.",
    submit: "your field in one line + 3 repetitive tasks.",
    video: "",
    coach: "Help the student name their field (track A, B or C) and find 3 concrete repetitive tasks they really do by hand. Ask about their week; refuse vague answers like 'marketing' — push to 'answering the same size question on Instagram'.",
    links: [],
    tutorial: `
      <h4>What is automation?</h4>
      <p><b>Automation</b> = the computer does a repetitive task for you, so you do not do it by hand.
      This semester you build one automation every week — for your own work. After 15 weeks, a working system is running for you.</p>
      <h4>Core steps — do these today</h4>
      <ol>
        <li><b>Your seat</b> — write your name on a post-it and stick it on your monitor. This is your seat for the whole semester.</li>
        <li><b>Turn on the computer</b> — open the Chrome browser. Problem? Put the red paper on top of your monitor.</li>
        <li><b>Join the class chat</b> — scan the KakaoTalk QR from the paper tutorial. Announcements live there.</li>
        <li><b>You are here</b> — you already found this website. Sign in with your student ID + your email. First time: your email locks to your ID, so use your own.</li>
        <li><b>Create your Make account</b> — go to <b>make.com</b> → <i>Get started free</i> → sign up with your Google account. Make is our main tool: it connects apps so they work by themselves.</li>
        <li><b>Your field, one line</b> — pick one track:
          <b>A.</b> work I do now (family shop, side job, online selling) ·
          <b>B.</b> work I want to do (a business idea) ·
          <b>C.</b> my work &amp; study (job applications, deadlines, documents).
          Then write one line: <i>"I do ___ for ___."</i></li>
        <li><b>Three repetitive tasks</b> — write 3 tasks you do again and again by hand.
          Examples: answering the same customer question · copying orders into a list · tracking application deadlines.</li>
      </ol>
      <p><b>Now press "Submit this week"</b> and type your one line + 3 tasks. Done — that is today. Submitting in class = attendance.</p>
      <h4>No idea for a field?</h4>
      <p>Borrow one and change it later: small online shop · tutoring · delivery · café · clothes reselling · photography · translation · travel guide · importing goods from your country · running an SNS account.</p>
      <h4>Advanced — want more this week?</h4>
      <p>See what automation looks like in a real business before we build one.
      Free lessons: <a href="https://academy.make.com" target="_blank" rel="noopener">academy.make.com</a> ·
      the official Make channel on YouTube — start with the <i>What is Make?</i> video.</p>
    `,
  },

  2: {
    name: "Make Basics — Trigger & Action",
    build: "your first automation in Make.",
    submit: "the easiest task from your list, automated — link + one line.",
    video: "",
    coach: "Help them pick the EASIEST task from their Week-1 list and describe it as one Trigger and one Action in plain words before they build it in Make.",
    links: [],
    tutorial: `
      <h4>Two words for the whole semester</h4>
      <p>Every automation has two parts. A <b>Trigger</b> — the event that starts it ("a new row appears").
      An <b>Action</b> — what happens next ("send me an email"). Today you connect one Trigger to one Action.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Make a Google Sheet with two columns: <b>Task</b> and <b>Note</b>. This sheet stands for your field's list (orders, applications, requests).</li>
        <li>Sign in at <b>make.com</b> → click <b>Create a new scenario</b>.</li>
        <li>Click the big <b>+</b> → search <b>Google Sheets</b> → choose <b>Watch New Rows</b>. Connect your Google account and pick your sheet. This is your Trigger.</li>
        <li>Click <b>+</b> after it → search <b>Gmail</b> → choose <b>Send an email</b>. Put your own address in "To". This is your Action.</li>
        <li>In the email body, click the small colored panels to insert the row data (Task, Note). This is called <b>mapping</b> — data from one app flowing into another.</li>
        <li>Click <b>Run once</b> → add a new row to your sheet → watch the email arrive.</li>
        <li><b>Turn the scenario OFF</b> when you finish (free plan = 1,000 runs per month — save them).</li>
      </ol>
      <h4>Make it yours</h4>
      <p>Rename the sheet columns to match your field: "Order / Customer", "Company / Deadline". Same automation, your material. That is what you submit.</p>
      <h4>Stuck?</h4>
      <p>Most problems are the Google connection. Remove the connection and connect again. Then: red paper up, or ask 3 neighbors first.</p>
      <h4>Advanced</h4>
      <p>Add a third module after Gmail — for example Google Sheets <i>Add a Row</i> to a second "log" sheet.
      Learn how modules pass data: <a href="https://academy.make.com" target="_blank" rel="noopener">Make Academy — Foundation course</a>.</p>
    `,
  },

  3: {
    name: "Connecting Apps — Conditions & Filters",
    build: "an automation with more than one app, plus a condition.",
    submit: "one task from your field that needs a condition — link + one line.",
    video: "",
    coach: "Help them find one task that has a real rule ('only urgent', 'only over 50,000') and phrase the filter condition precisely.",
    links: [],
    tutorial: `
      <h4>Not every row is the same</h4>
      <p>Real work has rules: "only urgent orders", "only amounts over 50,000", "only emails with an attachment".
      In Make, a rule between two modules is called a <b>Filter</b>.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-2 scenario (or copy it: scenario menu → <b>Clone</b>).</li>
        <li>Add a column to your sheet: <b>Status</b> (write "urgent" or "normal" in each row).</li>
        <li>Click the <b>wrench on the line</b> between the two modules → <b>Set up a filter</b>.</li>
        <li>Condition: <b>Status</b> — <i>equal to</i> — <b>urgent</b>. Label it "Only urgent".</li>
        <li>Run once → add one "urgent" row and one "normal" row → only the urgent one sends an email.</li>
        <li>Now add a second app: after Gmail, add <b>Google Sheets → Add a Row</b> to a separate "Urgent log" sheet. Three modules, two apps, one rule.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>Make it yours</h4>
      <p>What is the real rule in your field? Late payments? Orders over a size? Deadlines this week? Build that rule as the filter — that is your submission.</p>
      <h4>Advanced</h4>
      <p>Try a <b>Router</b> (right-click the line → Add a router): urgent rows → email, normal rows → just log.
      Docs: <a href="https://help.make.com" target="_blank" rel="noopener">help.make.com</a> — search "filter" and "router".</p>
    `,
  },

  4: {
    name: "Forms → Spreadsheet · Field Talk 1",
    build: "a Google Form that fills a spreadsheet by itself.",
    submit: "your intake form, automated — and your 1-minute field talk.",
    video: "",
    coach: "Help them design their intake form: who fills it, which 2-3 questions, what happens after. Also help them rehearse their 1-minute field talk.",
    links: [],
    tutorial: `
      <h4>Today two things happen</h4>
      <p>① You automate the front door of your field — where orders, requests, or applications come in.
      ② <b>Everyone stands up for 1 minute</b>: your field, one line, and the one task you most want to automate. Timer on screen. No exceptions.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Go to <b>forms.google.com</b> → new form. Title it for your field ("Order form", "Booking request", "Contact me").</li>
        <li>Add 2–3 questions: name, what they want, contact.</li>
        <li>In the form's <b>Responses</b> tab → click the green sheet icon → <b>Link to Sheets</b>. Now every answer becomes a row, by itself.</li>
        <li>In Make: <b>Google Sheets → Watch New Rows</b> on that response sheet → <b>Gmail → Send an email</b> to yourself: "New request from …".</li>
        <li>Open your form on your phone → submit a test answer → watch the row appear and the email arrive.</li>
        <li>Turn the scenario off after testing.</li>
      </ol>
      <h4>Your 1-minute talk</h4>
      <p>Three sentences are enough: <i>"I do ___ for ___. Every week I repeat ___. I want to automate ___."</i>
      Say it, sit down. This is graded (4 points) — speaking it out loud makes your field real.</p>
      <h4>Advanced</h4>
      <p>Send a confirmation email <b>to the person who filled the form</b> — map their email answer into Gmail "To".
      Careful: test with your own address first.</p>
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
    name: "Notion Basics",
    build: "a Notion space for your business data.",
    submit: "your Notion page link + one line.",
    video: "",
    coach: "Help them decide what data their field needs organized and name the Notion columns (Name, Status options, Date, Note).",
    links: [],
    tutorial: `
      <h4>Where your data lives</h4>
      <p>Sheets hold rows. <b>Notion</b> holds your whole field: orders, customers, notes, plans — in one place you actually want to open. Today: Notion itself. Next week: Make fills it automatically.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Go to <b>notion.com</b> → sign up free (Google account is fine).</li>
        <li>New page → name it after your field ("Bobur's Shop", "My Job Search").</li>
        <li>Inside, type <b>/database</b> → choose <b>Table</b>.</li>
        <li>Make the columns match your field: Name · Status (use the <i>Select</i> type: new / doing / done) · Date · Note.</li>
        <li>Add five real entries from your field by hand — feel what belongs in each column.</li>
        <li>Try two views: click <b>+ Add a view</b> → <b>Board</b>, grouped by Status. Same data, kanban board.</li>
        <li>Click <b>Share</b> → copy the link → that is your submission.</li>
      </ol>
      <h4>Advanced</h4>
      <p>Add a second database ("Customers") and a <b>Relation</b> column connecting the two.
      Guide: <a href="https://www.notion.com/help" target="_blank" rel="noopener">notion.com/help</a> — search "relations".</p>
    `,
  },

  11: {
    name: "Notion Automation",
    build: "data flowing into Notion by itself, through Make.",
    submit: "your Notion automation — link + one line.",
    video: "",
    coach: "Help them map their form fields to Notion columns and decide what Status a new card should start with.",
    links: [],
    tutorial: `
      <h4>Close the loop</h4>
      <p>Week 4: form fills a sheet. Today: the same event also creates a card in your Notion — your field updates itself while you sleep.</p>
      <h4>Core steps</h4>
      <ol>
        <li>In Make, open your form scenario → add a module: <b>Notion → Create a Database Item</b>.</li>
        <li>Connect Notion (Make asks you to give access — allow only the page you made last week).</li>
        <li>Map form answers into the Notion columns: name → Name, request → Note, Status → "new".</li>
        <li>Run once → submit a test form → watch the card appear in your Notion table <i>and</i> the Board view.</li>
        <li>Now your flow is: form → sheet → email reply → Notion card. Four apps, zero hands.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>Make it yours</h4>
      <p>Which view of your field do you want to open every morning? Build the Notion page you would actually check — that is the difference between homework and a tool.</p>
      <h4>Advanced</h4>
      <p>Reverse direction: Notion trigger <b>Watch Database Items</b> — when you drag a card to "done", Make sends the customer a "finished" email.</p>
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
