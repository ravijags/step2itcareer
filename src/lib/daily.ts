/* "Catch the AI's mistake": the daily question and the Job-Ready Check.
   Every question shows something an AI wrote. The student spots what is wrong (sometimes nothing is).
   Day 1 is the launch date below; a new question unlocks at midnight India time.
   The bank holds 60 questions (about two months). Add more at the end of a skill list; the order of
   existing questions never changes, so old daily links keep showing the same question. */

export type Skill = "sql" | "python" | "excel" | "prompt";

export type Question = {
  skill: Skill;
  task: string;   // what the student asked the AI to do
  code: string;   // what the AI gave back
  ask: string;    // the question
  options: string[];
  answer: number; // index into options
  why: string;    // the explanation shown after answering
};

export const SKILLS: Record<Skill, { name: string; short: string; color: string; sheet: string; roadmap: string; roadmapName: string }> = {
  sql:    { name: "SQL",          short: "SQL",    color: "#3B5BFF", sheet: "/resources/cheat-sheets/sql",          roadmap: "/resources/roadmaps/data-analyst", roadmapName: "Data Analyst roadmap" },
  python: { name: "Python",       short: "Python", color: "#16A34A", sheet: "/resources/cheat-sheets/python",       roadmap: "/resources/roadmaps/ai-engineer",  roadmapName: "AI Engineer roadmap" },
  excel:  { name: "Excel",        short: "Excel",  color: "#0F9D58", sheet: "/resources/cheat-sheets/excel",        roadmap: "/resources/roadmaps/data-analyst", roadmapName: "Data Analyst roadmap" },
  prompt: { name: "Working with AI", short: "AI",  color: "#FF7A3D", sheet: "/resources/cheat-sheets/ai-prompting", roadmap: "/resources/roadmaps/ai-engineer",  roadmapName: "AI Engineer roadmap" },
};

const NOTHING = "Nothing. This one is correct.";

const SQL: Question[] = [
  { skill: "sql", task: "Count how many customers have placed an order.",
    code: "SELECT COUNT(customer_id)\nFROM orders;",
    ask: "Why is the number too high?",
    options: ["It counts every order, so repeat customers are counted again", "COUNT can't take a column name", "It needs GROUP BY customer_id", NOTHING],
    answer: 0, why: "COUNT(customer_id) counts rows, one per order. A customer with 5 orders is counted 5 times. COUNT(DISTINCT customer_id) counts each customer once." },
  { skill: "sql", task: "Find Delhi customers who have no email saved.",
    code: "SELECT name FROM customers\nWHERE city = 'Delhi'\n  AND email = NULL;",
    ask: "Why does this return zero rows?",
    options: ["'Delhi' needs double quotes", "Nothing is ever = NULL; it should be IS NULL", "AND should be OR", "The table needs an alias"],
    answer: 1, why: "NULL means 'unknown', so email = NULL is never true, not even for empty emails. Use email IS NULL." },
  { skill: "sql", task: "Show total sales for each city.",
    code: "SELECT city, SUM(amount)\nFROM orders;",
    ask: "What is missing?",
    options: ["ORDER BY city", "GROUP BY city", "DISTINCT city", "A WHERE clause"],
    answer: 1, why: "To get one total per city you must GROUP BY city. Without it, most databases throw an error, and the rest return a single meaningless row." },
  { skill: "sql", task: "Top 3 highest-paid employees.",
    code: "SELECT name, salary\nFROM employees\nORDER BY salary\nLIMIT 3;",
    ask: "What does this actually return?",
    options: ["The 3 highest salaries", "The 3 lowest salaries", "3 random employees", "An error"],
    answer: 1, why: "ORDER BY sorts ascending (smallest first) by default. For the highest, write ORDER BY salary DESC." },
  { skill: "sql", task: "List every customer and their orders, including customers who never ordered.",
    code: "SELECT c.name, o.id\nFROM customers c\nINNER JOIN orders o\n  ON o.customer_id = c.id;",
    ask: "Who goes missing from the result?",
    options: ["Customers with no orders", "Orders with no customer", "Nobody", "Customers with only one order"],
    answer: 0, why: "INNER JOIN keeps only rows that match on both sides. Customers with no orders vanish. LEFT JOIN keeps every customer." },
  { skill: "sql", task: "Find customers whose name starts with A.",
    code: "SELECT name FROM customers\nWHERE name LIKE 'A';",
    ask: "Why does it find almost nobody?",
    options: ["LIKE is case-sensitive", "It only matches the exact name 'A'; it needs 'A%'", "LIKE needs double quotes", "It needs ORDER BY name"],
    answer: 1, why: "Without a wildcard, LIKE 'A' matches only the exact text A. % means 'anything after', so use LIKE 'A%'." },
  { skill: "sql", task: "Upgrade user 42 to the pro plan.",
    code: "UPDATE users\nSET plan = 'pro';",
    ask: "What happens if you run this?",
    options: ["Only user 42 is upgraded", "Every user is upgraded", "Nothing; it needs COMMIT", "An error, because the id is missing"],
    answer: 1, why: "With no WHERE, UPDATE changes every row. It should be WHERE id = 42. Always read UPDATE and DELETE queries from AI before running them." },
  { skill: "sql", task: "Show cities whose total sales are above 1,00,000.",
    code: "SELECT city, SUM(amount)\nFROM orders\nWHERE SUM(amount) > 100000\nGROUP BY city;",
    ask: "What's wrong?",
    options: ["100000 needs quotes", "You can't filter a SUM in WHERE; use HAVING after GROUP BY", "GROUP BY must come before FROM", NOTHING],
    answer: 1, why: "WHERE filters single rows before grouping, so it can't see totals. Filter groups with HAVING SUM(amount) > 100000." },
  { skill: "sql", task: "How many users signed up? (Some users skipped the email field.)",
    code: "SELECT COUNT(email)\nFROM users;",
    ask: "Why is the count too low?",
    options: ["COUNT(email) skips rows where email is NULL", "COUNT only counts unique values", "It needs GROUP BY email", "COUNT has a 1,000 row limit"],
    answer: 0, why: "COUNT(column) ignores NULLs. To count every row, use COUNT(*)." },
  { skill: "sql", task: "Show active users from Delhi or Noida.",
    code: "SELECT name FROM users\nWHERE city = 'Delhi'\n   OR city = 'Noida'\n  AND status = 'active';",
    ask: "Which wrong users sneak in?",
    options: ["Inactive users from Noida", "Inactive users from Delhi", "Active users from other cities", "None"],
    answer: 1, why: "AND is applied before OR, so this reads: Delhi (any status) OR (active Noida). Wrap the cities in brackets: (city = 'Delhi' OR city = 'Noida') AND status = 'active'." },
  { skill: "sql", task: "Find students who scored above the class average.",
    code: "SELECT name FROM marks\nWHERE score > AVG(score);",
    ask: "Why does this fail?",
    options: ["AVG only works on whole numbers", "WHERE can't use AVG directly; it needs a subquery", "It needs DISTINCT", "score must be in quotes"],
    answer: 1, why: "Aggregates like AVG can't sit in WHERE. Compute the average first: WHERE score > (SELECT AVG(score) FROM marks)." },
  { skill: "sql", task: "Total revenue from orders (each order has several items).",
    code: "SELECT SUM(o.amount)\nFROM orders o\nJOIN order_items i\n  ON i.order_id = o.id;",
    ask: "Why is revenue way too high?",
    options: ["SUM adds tax by default", "The join repeats each order once per item, so amounts are added again", "It should be AVG", "order_items has a bug"],
    answer: 1, why: "Joining one order to 3 items gives 3 rows, all with the same o.amount, so it's summed 3 times. Sum orders on their own, or sum the item prices instead." },
  { skill: "sql", task: "Orders placed in 2026 (order_date also stores the time).",
    code: "SELECT * FROM orders\nWHERE order_date\n  BETWEEN '2026-01-01'\n      AND '2026-12-31';",
    ask: "Which orders are missed?",
    options: ["Orders on 1 January", "Orders on 31 December after midnight", "Orders with no date", "None"],
    answer: 1, why: "'2026-12-31' means 31 Dec at 00:00, so anything later that day is left out. Use order_date >= '2026-01-01' AND order_date < '2027-01-01'." },
  { skill: "sql", task: "Number of orders per customer, including customers with zero.",
    code: "SELECT c.name, COUNT(*)\nFROM customers c\nLEFT JOIN orders o\n  ON o.customer_id = c.id\nGROUP BY c.name;",
    ask: "What do customers with no orders show?",
    options: ["0", "1", "NULL", "They don't appear"],
    answer: 1, why: "LEFT JOIN keeps them as one row with empty order columns, and COUNT(*) counts that row as 1. Use COUNT(o.id), which skips the empty value and gives 0." },
  { skill: "sql", task: "Sort products by price (price was imported as text).",
    code: "SELECT name, price\nFROM products\nORDER BY price;",
    ask: "Where does a ₹1000 product appear?",
    options: ["After ₹200, as expected", "Before ₹200, because text sorts letter by letter", "At the very end", "It's removed"],
    answer: 1, why: "Text sorts like a dictionary, so '1000' comes before '200' (1 is before 2). Store price as a number, or cast it when sorting." },
  { skill: "sql", task: "Conversion rate: buyers ÷ visitors (both whole numbers, PostgreSQL).",
    code: "SELECT buyers / visitors\n  AS conversion_rate\nFROM daily_stats;",
    ask: "With 30 buyers and 1000 visitors, what do you get?",
    options: ["0.03", "0", "3", "An error"],
    answer: 1, why: "Whole number ÷ whole number gives a whole number in PostgreSQL, so 0.03 becomes 0. Use buyers::numeric / visitors, or multiply by 100.0 first." },
  { skill: "sql", task: "Customers who have never placed an order.",
    code: "SELECT name FROM customers\nWHERE id NOT IN (\n  SELECT customer_id FROM orders\n);",
    ask: "If one order has customer_id = NULL, what happens?",
    options: ["Nothing changes", "The query returns no rows at all", "It returns every customer", "It errors out"],
    answer: 1, why: "NOT IN compared with a NULL is never true, so every row is filtered out. Use NOT EXISTS, or add WHERE customer_id IS NOT NULL inside." },
  { skill: "sql", task: "Find email addresses used by more than one account.",
    code: "SELECT email, COUNT(*)\nFROM users\nGROUP BY email\nHAVING COUNT(*) > 1;",
    ask: "What's wrong with it?",
    options: ["HAVING should be WHERE", "It needs ORDER BY", "It should be COUNT(DISTINCT email)", NOTHING],
    answer: 3, why: "This one is right. Group by email, keep groups with more than one row. AI is often right too. The skill is knowing which time is which." },
];

const PYTHON: Question[] = [
  { skill: "python", task: "Print the numbers 1 to 10.",
    code: "for i in range(1, 10):\n    print(i)",
    ask: "What's the last number printed?",
    options: ["10", "9", "11", "1"],
    answer: 1, why: "range stops before the end number. range(1, 11) prints 1 to 10." },
  { skill: "python", task: "Add up all the marks.",
    code: "marks = [70, 85, 90]\ntotal = 0\nfor m in marks:\n    total = m\nprint(total)",
    ask: "What does it print?",
    options: ["245", "90", "70", "0"],
    answer: 1, why: "total = m replaces the total each time, so it ends as the last mark. It should be total += m." },
  { skill: "python", task: "Ask the user's age and check if they're an adult.",
    code: "age = input(\"Age: \")\nif age >= 18:\n    print(\"Adult\")",
    ask: "What happens when you type 20?",
    options: ["Prints Adult", "TypeError: input gives text, not a number", "Prints nothing", "Prints 20"],
    answer: 1, why: "input() always returns text, and text can't be compared with 18. Convert it: age = int(input(\"Age: \"))." },
  { skill: "python", task: "Check if a number is even.",
    code: "def is_even(n):\n    return n % 2 == 1",
    ask: "What does is_even(4) return?",
    options: ["True", "False", "0", "An error"],
    answer: 1, why: "4 % 2 is 0, not 1, so this says False. The check is backwards: it should be n % 2 == 0." },
  { skill: "python", task: "Function that adds 18% GST to a price.",
    code: "def with_gst(price):\n    price * 1.18\n\nprint(with_gst(100))",
    ask: "What is printed?",
    options: ["118.0", "None", "100", "An error"],
    answer: 1, why: "The function calculates the value but never returns it, so Python returns None. Add return: return price * 1.18." },
  { skill: "python", task: "Print the total once, after the loop.",
    code: "total = 0\nfor n in [5, 10, 15]:\n    total += n\n    print(total)",
    ask: "What do you see?",
    options: ["30", "5, 15, 30 on separate lines", "15", "Nothing"],
    answer: 1, why: "print is indented inside the loop, so it runs every time. Move it left, outside the loop, to print 30 once." },
  { skill: "python", task: "Make a name uppercase.",
    code: "name = \"riya\"\nname.upper()\nprint(name)",
    ask: "What is printed?",
    options: ["RIYA", "riya", "Riya", "An error"],
    answer: 1, why: "Strings can't be changed in place. upper() returns a new string that's thrown away here. Write name = name.upper()." },
  { skill: "python", task: "Get the last item of a list.",
    code: "items = [\"pen\", \"book\", \"bag\"]\nlast = items[len(items)]",
    ask: "What happens?",
    options: ["last is 'bag'", "IndexError", "last is 'pen'", "last is None"],
    answer: 1, why: "Indexes start at 0, so the last index is len(items) - 1. len(items) is one past the end. Simplest: items[-1]." },
  { skill: "python", task: "Copy a list and add to the copy.",
    code: "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
    ask: "What is printed?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "An error"],
    answer: 1, why: "b = a doesn't copy; both names point to the same list. Use b = a.copy() or b = a[:]." },
  { skill: "python", task: "Count how often each word appears.",
    code: "counts = {}\nfor w in words:\n    counts[w] += 1",
    ask: "What happens on the first word?",
    options: ["It's set to 1", "KeyError, because the key doesn't exist yet", "It's set to 0", "Nothing"],
    answer: 1, why: "You can't add to a key that isn't there. Use counts[w] = counts.get(w, 0) + 1, or collections.Counter." },
  { skill: "python", task: "Check if the bill total equals 0.3.",
    code: "total = 0.1 + 0.2\nprint(total == 0.3)",
    ask: "What is printed?",
    options: ["True", "False", "0.3", "An error"],
    answer: 1, why: "Decimals are stored approximately, so 0.1 + 0.2 is 0.30000000000000004. For money use round(), math.isclose(), or Decimal." },
  { skill: "python", task: "Average of a list of numbers.",
    code: "def avg(nums):\n    return sum(nums) / len(nums)",
    ask: "Which input crashes it?",
    options: ["[0, 0]", "[] (an empty list)", "[-5, 5]", "[1.5]"],
    answer: 1, why: "An empty list has length 0, and dividing by zero raises ZeroDivisionError. Check first: if not nums: return 0." },
  { skill: "python", task: "Check if the user is Admin.",
    code: "if name = \"Admin\":\n    print(\"Welcome boss\")",
    ask: "What's wrong?",
    options: ["Admin needs single quotes", "= assigns; comparing needs ==", "The colon should go", "print needs brackets"],
    answer: 1, why: "A single = is assignment, which isn't allowed in an if. Comparison is ==. Python stops with a SyntaxError." },
  { skill: "python", task: "Remove negative numbers from a list.",
    code: "nums = [-1, -2, 3]\nfor n in nums:\n    if n < 0:\n        nums.remove(n)\nprint(nums)",
    ask: "What is printed?",
    options: ["[3]", "[-2, 3]", "[-1, 3]", "[]"],
    answer: 1, why: "Removing items while looping shifts the list, so the loop skips the next item. Build a new list: nums = [n for n in nums if n >= 0]." },
  { skill: "python", task: "Function that adds an item to a cart.",
    code: "def add(item, cart=[]):\n    cart.append(item)\n    return cart\n\nadd(\"pen\")\nprint(add(\"book\"))",
    ask: "What is printed?",
    options: ["['book']", "['pen', 'book']", "['book', 'pen']", "An error"],
    answer: 1, why: "The default [] is created once and shared by every call, so items pile up. Use cart=None, then cart = cart or [] inside." },
  { skill: "python", task: "List of the first five square numbers.",
    code: "squares = [n * n for n in range(1, 6)]\nprint(squares)",
    ask: "What's wrong?",
    options: ["It should be range(1, 5)", "It should be n ** n", "List comprehensions need a loop body", NOTHING],
    answer: 3, why: "Correct: [1, 4, 9, 16, 25]. Checking AI code means knowing when to trust it too." },
];

const EXCEL: Question[] = [
  { skill: "excel", task: "Total of B2 to B10, in cell B11.",
    code: "=SUM(B2:B9)",
    ask: "What's wrong?",
    options: ["SUM can't add a column", "It misses the last row, B10", "It should be =ADD", NOTHING],
    answer: 1, why: "The range stops at B9. AI often guesses ranges. Always check the range covers every row: =SUM(B2:B10)." },
  { skill: "excel", task: "Full name from first name (A2) and last name (B2).",
    code: "=A2&B2",
    ask: "What do you get for Riya / Sharma?",
    options: ["Riya Sharma", "RiyaSharma", "Sharma Riya", "#VALUE!"],
    answer: 1, why: "& joins text exactly, with no space. Use =A2&\" \"&B2, or =TEXTJOIN(\" \",TRUE,A2,B2)." },
  { skill: "excel", task: "Count students who passed (40 or more).",
    code: "=COUNTIF(B2:B50,\">40\")",
    ask: "Who is missed?",
    options: ["Students with exactly 40", "Students above 90", "Blank cells", "Nobody"],
    answer: 0, why: "\">40\" means more than 40, so a score of exactly 40 isn't counted. Use \">=40\"." },
  { skill: "excel", task: "Show Pass or Fail (pass is 40+).",
    code: "=IF(B2>=40,\"Pass\")",
    ask: "What shows for a score of 25?",
    options: ["Fail", "FALSE", "Blank", "#N/A"],
    answer: 1, why: "IF has no 'otherwise' value here, so Excel shows FALSE. Add it: =IF(B2>=40,\"Pass\",\"Fail\")." },
  { skill: "excel", task: "Commission = sales (column B) × the rate in C1. Fill it down.",
    code: "=B2*C1",
    ask: "What goes wrong in row 3 and below?",
    options: ["Nothing", "C1 shifts to C2, C3… which are empty, so you get 0", "B2 stays fixed", "#REF! everywhere"],
    answer: 1, why: "Normal references move when you drag. Lock the rate with $: =B2*$C$1." },
  { skill: "excel", task: "Growth % from last year (A2) to this year (B2).",
    code: "=(B2-A2)/B2",
    ask: "What's wrong?",
    options: ["Should divide by last year's value, A2", "Needs ×100 to work", "Brackets are wrong", NOTHING],
    answer: 0, why: "Growth is measured against where you started: =(B2-A2)/A2. From 100 to 150 is 50% growth, not 33%." },
  { skill: "excel", task: "Find the price for a product code from the Products sheet.",
    code: "=VLOOKUP(A2,Products!A:C,3)",
    ask: "Why can it return the wrong price?",
    options: ["Column 3 doesn't exist", "With no FALSE at the end it does an approximate match", "VLOOKUP can't read other sheets", "A2 must be locked"],
    answer: 1, why: "If you leave out the last argument, VLOOKUP assumes approximate match and can grab a nearby code. Use ,FALSE) or XLOOKUP." },
  { skill: "excel", task: "Grade: A for 80+, B for 60+, else C.",
    code: "=IF(B2>=60,\"B\",\n IF(B2>=80,\"A\",\"C\"))",
    ask: "What grade does 85 get?",
    options: ["A", "B", "C", "An error"],
    answer: 1, why: "85 passes the first test (>=60) and stops there with B. Check the highest band first: =IF(B2>=80,\"A\",IF(B2>=60,\"B\",\"C\"))." },
  { skill: "excel", task: "Total of imported sales in column C.",
    code: "=SUM(C2:C200)",
    ask: "It shows 0 even though column C is full. Why?",
    options: ["SUM is limited to 100 rows", "The numbers were imported as text", "The sheet is protected", "C1 is a header"],
    answer: 1, why: "Imported numbers often come in as text (look for small green triangles), and SUM ignores text. Use Convert to Number, or =VALUE()." },
  { skill: "excel", task: "Look up Rahul's marks by name.",
    code: "=XLOOKUP(\"Rahul\",A:A,B:B)",
    ask: "It says #N/A, but Rahul is in the list. Most likely why?",
    options: ["XLOOKUP is case-sensitive", "The cell has a hidden space, like 'Rahul '", "Column B is empty", "XLOOKUP needs a sorted list"],
    answer: 1, why: "Data typed by people often has extra spaces, so 'Rahul ' ≠ 'Rahul'. Clean the column with =TRIM()." },
  { skill: "excel", task: "Year from the date in A2.",
    code: "=LEFT(A2,4)",
    ask: "What do you get for 15-03-2026?",
    options: ["2026", "4609", "15-0", "#VALUE!"],
    answer: 1, why: "Excel stores dates as numbers (days since 1900), so LEFT cuts that number, not the year. Use =YEAR(A2)." },
  { skill: "excel", task: "Total sales for Delhi.",
    code: "=SUMIFS(B2:B50,\n A2:A100,\"Delhi\")",
    ask: "What happens?",
    options: ["Correct total", "#VALUE! because the ranges are different sizes", "Only the first 50 rows are checked", "Returns 0"],
    answer: 1, why: "SUMIFS needs the sum range and the criteria range to be the same size. Use B2:B100 with A2:A100." },
  { skill: "excel", task: "Average sale, ignoring the zero-value test rows.",
    code: "=AVERAGE(B2:B100)",
    ask: "What's wrong?",
    options: ["AVERAGE skips zeros already", "The zeros are included and pull the average down", "AVERAGE can't do 99 rows", NOTHING],
    answer: 1, why: "AVERAGE skips blank cells but counts zeros. Use =AVERAGEIF(B2:B100,\"<>0\")." },
  { skill: "excel", task: "Count Noida sales of ₹50,000 or more.",
    code: "=COUNTIFS(A2:A100,\"Noida\",\n C2:C100,\">=50000\")",
    ask: "What's wrong?",
    options: [">=50000 needs no quotes", "COUNTIFS takes only one condition", "The ranges should be different", NOTHING],
    answer: 3, why: "Correct. Same-size ranges, both conditions, and >= so exactly 50,000 counts. Not every AI answer is wrong." },
];

const PROMPT: Question[] = [
  { skill: "prompt", task: "You need a SQL query for your sales table.",
    code: "A: \"write a sql query for sales\"\n\nB: \"Table orders(id, city, amount,\n order_date). PostgreSQL. Total amount\n per city for 2026, highest first.\"",
    ask: "Which prompt gets a query you can use straight away?",
    options: ["A, because shorter is clearer", "B: it gives the table, the database and the exact result", "Both give the same answer", "Neither; AI can't write SQL"],
    answer: 1, why: "AI can't see your database. Give it the table and column names, which database you use, and exactly what you want back." },
  { skill: "prompt", task: "The AI's code uses a function you've never seen, and it errors.",
    code: "AI: \"Use pandas.smart_merge() — it\n handles everything automatically.\"",
    ask: "Best next move?",
    options: ["Trust it; the AI knows pandas", "Check the official docs; the function may not exist", "Ask the same question again", "Reinstall pandas"],
    answer: 1, why: "AI sometimes invents functions that sound real. The official docs are the source of truth. (There is no smart_merge in pandas.)" },
  { skill: "prompt", task: "You want help with your resume.",
    code: "Prompt: \"Improve my resume.\"",
    ask: "What's the biggest thing missing?",
    options: ["Saying please", "The job you're applying for, and what to improve", "Asking for bullet points", "Nothing; it's clear"],
    answer: 1, why: "'Better' means nothing without a target. Paste the job description and say what to fix: e.g. 'make the project bullets show results'." },
  { skill: "prompt", task: "You'll paste a customer Excel file into an AI tool to analyse.",
    code: "Columns: name, phone, city,\n order_total, last_order_date",
    ask: "What does a professional do first?",
    options: ["Paste it as it is", "Remove or mask names and phone numbers", "Convert it to PDF", "Email it to themselves"],
    answer: 1, why: "Customer personal data shouldn't go into outside AI tools. Keep only the columns you need for the analysis. Interviewers ask about this." },
  { skill: "prompt", task: "AI wrote code that works, but you don't understand it. Interview tomorrow.",
    code: "\"It runs. Ship it.\"",
    ask: "Best move?",
    options: ["Memorise it", "Ask the AI to explain it line by line, then rewrite it yourself", "Ask for a shorter version", "Hope they don't ask"],
    answer: 1, why: "Interviewers ask 'why did you do it this way?' Understanding it and rewriting it yourself is what turns AI code into your skill." },
  { skill: "prompt", task: "You asked: 'Explain recursion.' The answer was too advanced.",
    code: "AI: \"Recursion leverages the call\n stack to decompose problems via\n self-similar subproblems…\"",
    ask: "Best follow-up prompt?",
    options: ["\"Simpler.\"", "\"Explain it for a first-year student, with one short Python example.\"", "\"Explain recursion again.\"", "Switch to another AI"],
    answer: 1, why: "Tell the AI who you are and what form you want (level plus example). Vague follow-ups get vague answers." },
  { skill: "prompt", task: "You need AI output you can paste into Excel.",
    code: "Prompt: \"List the top 10 cities\n and their sales.\"",
    ask: "What change makes it paste cleanly?",
    options: ["Add 'please'", "Ask for CSV with named columns: city,sales", "Ask for bullet points", "Ask for a paragraph"],
    answer: 1, why: "Name the output format. CSV with column names pastes straight into Excel. Bullets and paragraphs don't." },
  { skill: "prompt", task: "You want 20 product descriptions in your brand's style.",
    code: "Prompt: \"Write 20 product\n descriptions in our style.\"",
    ask: "What helps most?",
    options: ["Saying 'our style' in capitals", "Pasting 2 real examples of your style", "Asking for 40 and picking the best", "Using a longer word limit"],
    answer: 1, why: "The AI doesn't know your style. Showing two examples (called few-shot prompting) works far better than describing it." },
  { skill: "prompt", task: "AI says your code is correct, but your test fails.",
    code: "AI: \"Your function looks correct\n and handles all cases.\"\n\nTest: FAILED (expected 5, got 4)",
    ask: "What do you trust?",
    options: ["The AI; tests can be wrong", "The failing test; run it and find out why", "Neither; delete the test", "Ask the AI if it's sure"],
    answer: 1, why: "Running code beats opinions. The test shows what really happens. Use the AI to help find why, not to decide whether it's broken." },
  { skill: "prompt", task: "You want an AI to build your whole final-year project.",
    code: "Prompt: \"Build me a complete food\n delivery app with login, payments,\n tracking and admin panel.\"",
    ask: "What works better?",
    options: ["This prompt, but longer", "Break it into steps (login first) and check each before moving on", "Ask for it in a different language", "Ask 3 AIs and merge"],
    answer: 1, why: "One giant prompt gives you thousands of lines you can't check or explain. Build in small steps, test each, and you'll actually know your project." },
  { skill: "prompt", task: "AI totalled 18% GST for 40 invoices.",
    code: "AI: \"Total GST: ₹1,24,380\"\n\nYour quick estimate: ~₹1,40,000",
    ask: "What should you do?",
    options: ["Trust the AI; it's good at maths", "Recalculate in Excel or Python", "Average the two numbers", "Ask it to round off"],
    answer: 1, why: "Chat AIs can slip on long arithmetic. For real numbers, let Excel or code do the maths. AI can write the formula for you." },
  { skill: "prompt", task: "You ask an AI about the newest features in a framework.",
    code: "AI: \"The latest version is…\"",
    ask: "What's the catch?",
    options: ["AI is always up to date", "Its knowledge stops at a date; check the official release notes", "Frameworks don't change", "Only paid AIs know versions"],
    answer: 1, why: "Models learn from data up to a cutoff date and can describe an old version as 'latest'. For anything recent, check the official source." },
];

const POOLS: Record<Skill, Question[]> = { sql: SQL, python: PYTHON, excel: EXCEL, prompt: PROMPT };

/* Daily order: SQL, Python, Excel, AI, repeating, so no skill shows up two days in a row. */
export const BANK: Question[] = (() => {
  const order: Skill[] = ["sql", "python", "excel", "prompt"];
  const idx: Record<Skill, number> = { sql: 0, python: 0, excel: 0, prompt: 0 };
  const out: Question[] = [];
  const total = SQL.length + PYTHON.length + EXCEL.length + PROMPT.length;
  while (out.length < total) {
    for (const s of order) if (idx[s] < POOLS[s].length) out.push(POOLS[s][idx[s]++]);
  }
  return out;
})();

/* ── Dates. Everything is in India time. Day 1 = launch day. ── */
const IST_MS = 5.5 * 3600 * 1000;
const DAY_MS = 86400000;
export const LAUNCH = Date.UTC(2026, 10, 16) / DAY_MS; // 16 Nov 2026, as a day count

export function todayNumber(now = Date.now()): number {
  return Math.floor((now + IST_MS) / DAY_MS) - LAUNCH + 1;
}
export function msToNext(now = Date.now()): number {
  const t = now + IST_MS;
  return DAY_MS - (t % DAY_MS);
}
export function isWeekend(n: number): boolean {
  const d = new Date((LAUNCH + n - 1) * DAY_MS).getUTCDay();
  return d === 0 || d === 6;
}
export function questionFor(n: number): Question {
  return BANK[(((n - 1) % BANK.length) + BANK.length) % BANK.length];
}

/* ── Job-Ready Check: 10 questions (3 SQL, 3 Python, 2 Excel, 2 AI). A new set each week. ── */
export const CHECK_MIX: [Skill, number][] = [["sql", 3], ["python", 3], ["excel", 2], ["prompt", 2]];

export function weekNumber(now = Date.now()): number {
  return Math.floor((todayNumber(now) - 1) / 7) + 1;
}
export function checkSet(week: number): Question[] {
  const out: Question[] = [];
  for (const [s, k] of CHECK_MIX) {
    const pool = POOLS[s];
    for (let i = 0; i < k; i++) out.push(pool[((week - 1) * k + i * 5) % pool.length]);
  }
  return out;
}
