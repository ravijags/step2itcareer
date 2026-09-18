/* Maps the emoji strings in content files to the shared icon set, so content stays
   the source of truth while nothing on the site ever renders a system emoji. */
import { Icon, IconTile } from "@/components/Icons";

type IconKey = keyof typeof Icon;

const MAP: Record<string, IconKey> = {
  "🧠": "Brain", "🔗": "Link", "💬": "Message", "📊": "ChartBar", "🏗️": "Layers", "🗄️": "Database",
  "🔍": "Search", "🔄": "Refresh", "📋": "Clipboard", "📈": "Trend", "🐍": "Code", "☁️": "Cloud",
  "🤝": "Users", "🤖": "Robot", "🚀": "Rocket", "📐": "Ruler", "🎯": "Target", "🌐": "Globe",
  "⚡": "Bolt", "🧮": "Calculator", "🧪": "Flask", "🟩": "Box", "🛡️": "Shield", "🗺️": "Route",
  "🔬": "Search", "🔧": "Wrench", "🔒": "Lock", "🔐": "Lock", "🔌": "Plug", "📱": "Mobile",
  "📧": "Mail", "📗": "Book", "📉": "Trend", "💰": "Coin", "👨‍🏫": "School", "🐳": "Box",
  "🏆": "Trophy", "🎭": "Sparkle", "🎨": "Palette", "⚛️": "Atom", "⚙️": "Settings",
  "👥": "Users", "🎖️": "Medal", "🎓": "School", "💼": "Briefcase", "👨‍💻": "Code", "💡": "Bulb",
  "👁️": "Eye", "🎮": "Gamepad", "🧩": "Puzzle", "🌱": "Seedling", "👨‍👩‍👧": "Family", "⭐": "Star",
  "📚": "Book", "💻": "Code", "🎬": "Video", "📅": "Calendar", "✅": "Check2", "🏅": "Medal",
  "🌟": "Star", "📞": "Phone", "🖥️": "Code", "🧑‍💻": "Code", "📝": "Clipboard", "🔥": "Flame",
};

export function iconFor(emoji: string): IconKey {
  return MAP[emoji] ?? MAP[emoji.replace("\uFE0F", "")] ?? "Sparkle";
}

export default function SkillIcon({ emoji, size = 40, tone = "primary", dark = false, className = "" }: {
  emoji: string; size?: number; tone?: "primary" | "accent"; dark?: boolean; className?: string;
}) {
  const K = Icon[iconFor(emoji)];
  return (
    <div className={className}>
      <IconTile tone={tone} size={size} dark={dark}><K size={Math.round(size * 0.48)} /></IconTile>
    </div>
  );
}
