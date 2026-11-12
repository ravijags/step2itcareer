/* Cheat Sheets (v4.3) — one-page references people screenshot, save and share.
   Each item: a short snippet and what it does. Every snippet is plain, standard syntax. */

export type Item = { code: string; note: string };
export type Section = { title: string; items: Item[] };
export type Sheet = { slug: string; title: string; tag: string; color: string; blurb: string; course: string; sections: Section[] };

export const SHEETS: Sheet[] = [
  {
    slug: "python", title: "Python Basics", tag: "Python", color: "#3B5BFF", course: "python-for-ai",
    blurb: "The Python you'll use every day — variables to files, on one page.",
    sections: [
      { title: "Variables & types", items: [
        { code: 'name = "Asha"\nage = 21\nprice = 99.5\nis_live = True', note: "str, int, float, bool" },
        { code: "type(age)        # <class 'int'>", note: "Check a value's type" },
        { code: 'int("42")   str(42)   float("3.5")', note: "Convert between types" },
        { code: 'f"{name} is {age}"', note: "f-string: put values inside text" },
      ] },
      { title: "Lists & dictionaries", items: [
        { code: "nums = [3, 1, 2]\nnums.append(4)\nnums.sort()", note: "List: ordered, changeable" },
        { code: "nums[0]   nums[-1]   nums[1:3]", note: "First, last, a slice" },
        { code: 'user = {"name": "Asha", "age": 21}\nuser["age"]\nuser.get("city", "Noida")', note: "Dictionary: key → value; get() with a default" },
        { code: "squares = [n * n for n in range(5)]", note: "List comprehension" },
      ] },
      { title: "Conditions & loops", items: [
        { code: 'if age >= 18:\n    print("adult")\nelif age >= 13:\n    print("teen")\nelse:\n    print("child")', note: "if / elif / else" },
        { code: "for n in range(1, 6):\n    print(n)", note: "Loop 1 to 5" },
        { code: "for i, item in enumerate(nums):\n    print(i, item)", note: "Loop with the index" },
        { code: "while count < 3:\n    count += 1", note: "Loop while a condition is true" },
      ] },
      { title: "Functions", items: [
        { code: 'def greet(name, greeting="Hi"):\n    return f"{greeting}, {name}!"', note: "Function with a default argument" },
        { code: "add = lambda a, b: a + b", note: "Small one-line function" },
      ] },
      { title: "Files & errors", items: [
        { code: 'with open("notes.txt") as f:\n    text = f.read()', note: "Read a file (closes automatically)" },
        { code: 'with open("out.txt", "w") as f:\n    f.write("done")', note: "Write a file" },
        { code: 'try:\n    x = int(value)\nexcept ValueError:\n    print("not a number")', note: "Handle an error instead of crashing" },
      ] },
    ],
  },
  {
    slug: "sql", title: "SQL Essentials", tag: "SQL", color: "#22B8D6", course: "sql-excel",
    blurb: "The queries analysts and developers write daily.",
    sections: [
      { title: "Read data", items: [
        { code: "SELECT name, city FROM customers;", note: "Pick columns" },
        { code: "SELECT * FROM orders WHERE amount > 500;", note: "Filter rows" },
        { code: "SELECT * FROM orders ORDER BY amount DESC LIMIT 10;", note: "Top 10 by amount" },
        { code: "SELECT DISTINCT city FROM customers;", note: "Unique values" },
        { code: "WHERE name LIKE 'A%'   WHERE city IN ('Noida', 'Delhi')", note: "Pattern and list matching" },
      ] },
      { title: "Summarise", items: [
        { code: "SELECT COUNT(*), SUM(amount), AVG(amount) FROM orders;", note: "Count, total, average" },
        { code: "SELECT city, COUNT(*) AS customers\nFROM customers\nGROUP BY city;", note: "One row per group" },
        { code: "GROUP BY city\nHAVING COUNT(*) > 50", note: "Filter groups (WHERE filters rows)" },
      ] },
      { title: "Join tables", items: [
        { code: "SELECT o.id, c.name\nFROM orders o\nJOIN customers c ON c.id = o.customer_id;", note: "INNER JOIN: only matching rows" },
        { code: "LEFT JOIN customers c ON c.id = o.customer_id", note: "LEFT JOIN: keep all rows from the left table" },
      ] },
      { title: "Change data", items: [
        { code: "INSERT INTO customers (name, city) VALUES ('Asha', 'Noida');", note: "Add a row" },
        { code: "UPDATE customers SET city = 'Delhi' WHERE id = 7;", note: "Change rows — always use WHERE" },
        { code: "DELETE FROM customers WHERE id = 7;", note: "Remove rows — always use WHERE" },
      ] },
      { title: "Level up", items: [
        { code: "CASE WHEN amount > 1000 THEN 'high' ELSE 'normal' END", note: "If/else inside a query" },
        { code: "ROW_NUMBER() OVER (PARTITION BY city ORDER BY amount DESC)", note: "Window function: rank within each group" },
      ] },
    ],
  },
  {
    slug: "git", title: "Git & GitHub", tag: "Git", color: "#FF7A3D", course: "ai-assisted-coding",
    blurb: "Save your work, undo mistakes and share code — the commands you'll actually use.",
    sections: [
      { title: "Start", items: [
        { code: "git init", note: "Turn a folder into a repository" },
        { code: "git clone <url>", note: "Copy a repository from GitHub" },
        { code: 'git config --global user.name "Your Name"', note: "Set your name once" },
      ] },
      { title: "Everyday", items: [
        { code: "git status", note: "What changed?" },
        { code: "git add .", note: "Stage all changes" },
        { code: 'git commit -m "Add login page"', note: "Save a snapshot with a message" },
        { code: "git push", note: "Upload to GitHub" },
        { code: "git pull", note: "Download the latest from GitHub" },
      ] },
      { title: "Branches", items: [
        { code: "git switch -c feature/login", note: "Create and move to a new branch" },
        { code: "git switch main", note: "Go back to main" },
        { code: "git merge feature/login", note: "Bring a branch's work into the current one" },
      ] },
      { title: "Look back & undo", items: [
        { code: "git log --oneline", note: "Short history" },
        { code: "git diff", note: "See unstaged changes line by line" },
        { code: "git restore file.js", note: "Throw away uncommitted changes to a file" },
        { code: "git revert <commit>", note: "Undo a commit safely with a new commit" },
      ] },
    ],
  },
  {
    slug: "excel", title: "Excel Formulas", tag: "Excel", color: "#16A34A", course: "sql-excel",
    blurb: "The formulas that come up in every analyst interview and every office job.",
    sections: [
      { title: "Basics", items: [
        { code: "=SUM(B2:B100)   =AVERAGE(B2:B100)", note: "Total and average" },
        { code: "=COUNT(B2:B100)   =COUNTA(A2:A100)", note: "Count numbers / count non-empty cells" },
        { code: "=MAX(B2:B100)   =MIN(B2:B100)", note: "Largest and smallest" },
        { code: "=ROUND(B2, 2)", note: "Round to 2 decimals" },
      ] },
      { title: "Conditions", items: [
        { code: '=IF(B2>=500, "High", "Normal")', note: "If / else" },
        { code: '=COUNTIF(C2:C100, "Noida")', note: "Count rows that match" },
        { code: '=SUMIF(C2:C100, "Noida", B2:B100)', note: "Total for rows that match" },
        { code: '=SUMIFS(B2:B100, C2:C100, "Noida", D2:D100, "Paid")', note: "Total with several conditions" },
        { code: '=IFERROR(B2/C2, 0)', note: "Show 0 instead of an error" },
      ] },
      { title: "Lookups", items: [
        { code: "=XLOOKUP(E2, A2:A100, B2:B100)", note: "Find E2 in column A, return the value from B (Excel 365/2021)" },
        { code: "=VLOOKUP(E2, A2:B100, 2, FALSE)", note: "Older lookup — FALSE means exact match" },
        { code: "=INDEX(B2:B100, MATCH(E2, A2:A100, 0))", note: "Flexible lookup that works everywhere" },
      ] },
      { title: "Text & dates", items: [
        { code: '=TRIM(A2)   =UPPER(A2)   =PROPER(A2)', note: "Clean up text" },
        { code: '=LEFT(A2, 3)   =RIGHT(A2, 4)   =LEN(A2)', note: "Cut and measure text" },
        { code: '=A2 & " " & B2', note: "Join text" },
        { code: '=TODAY()   =TEXT(A2, "dd-mmm-yyyy")', note: "Today's date / format a date" },
      ] },
    ],
  },
  {
    slug: "java", title: "Core Java", tag: "Java", color: "#7B5BFF", course: "core-java",
    blurb: "Core Java syntax and collections, on one page.",
    sections: [
      { title: "Basics", items: [
        { code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello");\n    }\n}', note: "Every program starts at main" },
        { code: 'int age = 21;\ndouble price = 99.5;\nboolean live = true;\nString name = "Asha";', note: "Common types" },
        { code: "var total = 0;", note: "Let Java infer the type (Java 10+)" },
      ] },
      { title: "Control flow", items: [
        { code: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}", note: "Counting loop" },
        { code: "for (String s : names) { ... }", note: "Loop over a collection" },
        { code: 'String size = (n > 10) ? "big" : "small";', note: "One-line if/else" },
      ] },
      { title: "OOP", items: [
        { code: "class Student {\n    private String name;\n    Student(String name) { this.name = name; }\n    String getName() { return name; }\n}", note: "Class, private field, constructor, getter" },
        { code: "class Topper extends Student { ... }", note: "Inheritance" },
        { code: "interface Payable { double pay(); }", note: "Interface: a contract classes implement" },
      ] },
      { title: "Collections", items: [
        { code: "List<String> names = new ArrayList<>();\nnames.add(\"Asha\");", note: "Resizable list" },
        { code: 'Map<String, Integer> marks = new HashMap<>();\nmarks.put("Asha", 92);', note: "Key → value" },
        { code: "Set<String> cities = new HashSet<>();", note: "No duplicates" },
        { code: "names.stream().filter(n -> n.startsWith(\"A\")).toList();", note: "Streams: filter a list (toList() needs Java 16+)" },
      ] },
      { title: "Exceptions", items: [
        { code: "try {\n    int x = Integer.parseInt(s);\n} catch (NumberFormatException e) {\n    System.out.println(\"not a number\");\n}", note: "Handle an error" },
      ] },
    ],
  },
  {
    slug: "ai-prompting", title: "Prompting AI Tools", tag: "AI", color: "#DB2777", course: "ai-productivity",
    blurb: "Prompts that get useful answers from ChatGPT, Claude and Gemini — for study and work.",
    sections: [
      { title: "The basic recipe", items: [
        { code: "Role: You are a senior data analyst.\nTask: Explain what this chart shows.\nContext: It's for a manager with no stats background.\nFormat: 3 bullet points, under 60 words.", note: "Role · task · context · format" },
        { code: "Here's an example of the style I want: …", note: "Show one good example" },
        { code: "Before answering, ask me any questions you need.", note: "Let it clarify first" },
      ] },
      { title: "Study smarter", items: [
        { code: "Explain recursion like I'm new to coding, then give me 3 practice questions. Don't give answers until I try.", note: "Learn, don't copy" },
        { code: "Here's my code and the error. Explain why it fails — don't rewrite it for me.", note: "Debug and understand" },
        { code: "Quiz me on SQL joins, one question at a time.", note: "Active recall" },
      ] },
      { title: "Work and job hunt", items: [
        { code: "Rewrite this resume bullet to show impact, using only facts I've given you.", note: "No invented achievements" },
        { code: "Turn these meeting notes into action items with owners.", note: "Summaries that drive action" },
        { code: "Act as an interviewer for a fresher Java role. Ask one question at a time.", note: "Mock interviews" },
      ] },
      { title: "Stay safe", items: [
        { code: "What are you unsure about in this answer?", note: "Ask it to flag doubts" },
        { code: "Give me sources I can check.", note: "Then actually check them" },
        { code: "Never paste passwords, OTPs or private data.", note: "Treat chats as not private" },
      ] },
    ],
  },
];

export const getSheet = (slug: string) => SHEETS.find((s) => s.slug === slug);
