const items = [
  {
    title: "Indie Game Dev",
    body: "Building my first game in Godot. Handling game logic, scenes, and systems from scratch while my fiancée picks up Blender for the art side. We work on it together on weekends. Started with tutorials, ended up deep in state machines at 2am.",
  },
  {
    title: "Nintendo / The Legend of Zelda",
    body: "Lifelong Nintendo fan. Zelda is part of why I got into software in the first place. Ocarina of Time still holds up. Go back through the catalog whenever I find time.",
  },
  {
    title: "Lower East Side, NYC",
    body: "Born and raised in New York. Family is in the LES, still home base. Weekends are usually spent there with good food and good people.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <h2 className="text-2xl font-bold text-white mb-8">Outside the Code</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <span className="text-[#909090] font-mono text-xs mt-[5px] shrink-0">▸</span>
            <div>
              <p className="text-white font-medium mb-1">{item.title}</p>
              <p className="text-sm text-[#909090] leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
