import React from 'react';

const principles = [
  "Be radically open-minded and radically transparent.",
  "Know how to get in sync.",
  "Get and stay in sync.",
  "Triangulate your view with believable people who are willing to disagree.",
  "Remember that everyone has opinions.",
  "Recognize that conflicts are essential for great relationships.",
  "Be assertive and open-minded at the same time.",
  "Make sure people don’t confuse recommendations with commands.",
  "Don’t worry about looking good — worry about achieving the goal.",
  "Don’t let loyalty to people stand in the way of truth and the well-being of the organization.",
  "Don't be naive about dishonesty.",
  "Make sure that people who are given responsibility can speak up and be heard.",
  "Recognize that you need both thinkers and doers.",
  "Use the phrase “and another thing” to signal that you’re moving on to another topic.",
  "Think about the appropriate pace of your conversation.",
  "Be careful not to lose personal responsibility via group decision-making.",
  "Don’t get stuck in front of the headlights.",
  "When you’re responsible for something, you have the right to do whatever you think is best as long as you’re following the protocols.",
  "It’s more important that the person who is fielding the question answers it than the person who is asking it gets an answer.",
  "Be an imperfectionist.",
  "Don’t mistake possibilities for probabilities.",
  "Understand that when people are too attached to their opinions, they are not seeking truth but are trying to prove they are right.",
  "Don’t have anything to do with people who are not going to be on the same mission as you.",
  "Be precise in your communication.",
  "Don’t get distracted by the “shiny objects.”",
  "Don’t confuse what you wish were true with what is true.",
  "Don’t get hung up on small and unimportant things.",
  "Don’t let the little things divide you when your agreement on the big things should bind you.",
  "Don’t mistake the trappings of success for success itself.",
  "Don't try to please everyone."
];

const Principles: React.FC = () => {
  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">My Principles</h1>
          <p className="text-xl text-gray-700 mt-4 leading-relaxed max-w-4xl">A foundational guide to my approach in work and life, inspired by the work of Ray Dalio.</p>
        </header>
        
        <div className="leading-normal">
            <ol className="list-decimal list-outside space-y-4 text-gray-700 text-xl">
                {principles.map((principle, index) => (
                    <li key={index} className="ml-5 pl-2">
                        {principle}
                    </li>
                ))}
            </ol>
        </div>

    </div>
  );
};

export default Principles;