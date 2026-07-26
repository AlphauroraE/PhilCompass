// PhilCompass Character Data
// 16 philosophical archetypes organized into 4 groups

export const characterGroups = {
  analysts: {
    name: "The Analysts",
    color: "#c14649",
    description: "Logical and strategic thinkers who value reason and knowledge"
  },
  idealists: {
    name: "The Idealists",
    color: "#553b6e",
    description: "Visionary thinkers who pursue meaning and authenticity"
  },
  pragmatists: {
    name: "The Pragmatists",
    color: "#578c5a",
    description: "Practical thinkers who focus on results and experience"
  },
  traditionalists: {
    name: "The Traditionalists",
    color: "#ecd490",
    description: "Grounded thinkers who value order, duty, and community"
  }
};

export const characters = [
  // Analysts (Red) - #c14649
  {
    id: "the-logician",
    name: "The Logician",
    subtitle: "Seeker of Universal Truth",
    group: "analysts",
    color: "#c14649",
    shortDescription: "Embraces pure reason and logical analysis to understand reality. Believes truth can be discovered through rational inquiry alone.",
    fullDescription: "The Logician approaches philosophy with the precision of a mathematician. They believe that through careful logical analysis and rational inquiry, we can arrive at universal truths about reality, ethics, and existence. Emotions and intuitions are seen as potential obstacles to clear thinking, while logical consistency is the highest virtue. The Logician often questions everything, seeking to build knowledge from first principles that are self-evidently true.",
    strengths: ["Analytical thinking", "Consistency", "Objectivity", "Precision"],
    challenges: ["May overlook emotional truths", "Can be overly skeptical", "May miss practical applications"],
    philosophers: ["Aristotle", "Gottlob Frege", "Bertrand Russell"]
  },
  {
    id: "the-rationalist",
    name: "The Rationalist",
    subtitle: "Champion of Innate Knowledge",
    group: "analysts",
    color: "#c14649",
    shortDescription: "Believes knowledge comes primarily from reason and that some ideas are innate within us, waiting to be discovered.",
    fullDescription: "The Rationalist holds that the mind possesses innate ideas and that reason is the primary source of knowledge. They believe that certain truths—mathematical, logical, and metaphysical—can be known independently of sensory experience. Through careful introspection and rational analysis, we can discover fundamental principles about reality that are necessarily true. The Rationalist trusts the power of the mind above all else.",
    strengths: ["Systematic thinking", "A priori reasoning", "Conceptual clarity", "Deductive power"],
    challenges: ["May undervalue experience", "Can be too abstract", "Might miss empirical insights"],
    philosophers: ["René Descartes", "Baruch Spinoza", "Gottfried Leibniz"]
  },
  {
    id: "the-skeptic",
    name: "The Skeptic",
    subtitle: "Questioner of All Claims",
    group: "analysts",
    color: "#c14649",
    shortDescription: "Questions all knowledge claims and suspends judgment, believing certainty is often an illusion.",
    fullDescription: "The Skeptic approaches all claims with doubt and critical scrutiny. They recognize the limitations of human knowledge and the many ways we can be deceived by our senses, reasoning, and biases. Rather than accepting beliefs dogmatically, the Skeptic suspends judgment and continues to investigate. This philosophical humility leads to intellectual freedom and protection from false beliefs, though it may also lead to uncertainty about fundamental questions.",
    strengths: ["Critical thinking", "Intellectual humility", "Open-mindedness", "Resistance to dogma"],
    challenges: ["May struggle with decisions", "Can seem nihilistic", "Might undermine helpful beliefs"],
    philosophers: ["Pyrrho", "Sextus Empiricus", "David Hume"]
  },
  {
    id: "the-determinist",
    name: "The Determinist",
    subtitle: "Observer of Causal Chains",
    group: "analysts",
    color: "#c14649",
    shortDescription: "Sees all events as the inevitable result of prior causes, viewing the universe as a vast causal network.",
    fullDescription: "The Determinist understands the universe as governed by causal laws, where every event—including human choices—follows necessarily from prior conditions. This perspective offers a scientific understanding of human behavior and can foster compassion, as people are seen as products of factors beyond their ultimate control. The Determinist finds meaning in understanding these causal relationships rather than in notions of free will or moral blame.",
    strengths: ["Scientific worldview", "Compassionate understanding", "Predictive thinking", "Systematic analysis"],
    challenges: ["May undermine responsibility", "Can feel fatalistic", "Might reduce motivation"],
    philosophers: ["Baron d'Holbach", "Pierre-Simon Laplace", "B.F. Skinner"]
  },

  // Idealists (Purple) - #553b6e
  {
    id: "the-existentialist",
    name: "The Existentialist",
    subtitle: "Creator of Personal Meaning",
    group: "idealists",
    color: "#553b6e",
    shortDescription: "Believes existence precedes essence—we must create our own meaning in an inherently meaningless universe.",
    fullDescription: "The Existentialist confronts the fundamental absurdity of existence and takes radical responsibility for creating meaning. Rejecting predetermined essences or purposes, they believe we are 'condemned to be free' and must authentically choose our values and projects. Anxiety and dread are natural responses to this freedom, but through authentic choice, we can create a meaningful life. The Existentialist values individuality, personal responsibility, and living genuinely.",
    strengths: ["Authenticity", "Personal responsibility", "Creative meaning-making", "Courage"],
    challenges: ["May feel isolated", "Can experience anxiety", "Might struggle with shared values"],
    philosophers: ["Jean-Paul Sartre", "Simone de Beauvoir", "Albert Camus"]
  },
  {
    id: "the-transcendentalist",
    name: "The Transcendentalist",
    subtitle: "Seeker of Higher Reality",
    group: "idealists",
    color: "#553b6e",
    shortDescription: "Believes in a spiritual reality beyond the material world, accessible through intuition and communion with nature.",
    fullDescription: "The Transcendentalist sees beyond the material world to a higher spiritual reality that underlies all existence. Through intuition, self-reflection, and communion with nature, one can access this transcendent dimension and discover profound truths about existence. Society and its institutions often obscure these truths, so the Transcendentalist values solitude, simplicity, and individual spiritual exploration. They find the divine within themselves and in the natural world.",
    strengths: ["Spiritual insight", "Connection to nature", "Self-reliance", "Intuitive wisdom"],
    challenges: ["May reject helpful institutions", "Can seem impractical", "Might be too individualistic"],
    philosophers: ["Ralph Waldo Emerson", "Henry David Thoreau", "Margaret Fuller"]
  },
  {
    id: "the-romantic",
    name: "The Romantic",
    subtitle: "Champion of Passion and Beauty",
    group: "idealists",
    color: "#553b6e",
    shortDescription: "Values emotion, imagination, and aesthetic experience as paths to truth and meaning.",
    fullDescription: "The Romantic believes that emotion, imagination, and aesthetic experience reveal truths that cold reason cannot grasp. Beauty, passion, and creative expression are not mere diversions but pathways to understanding the deepest aspects of human existence. The Romantic rebels against excessive rationalism and materialism, finding meaning in art, love, nature, and the sublime. They celebrate human feeling and the creative spirit as the highest expressions of our humanity.",
    strengths: ["Emotional intelligence", "Creativity", "Appreciation of beauty", "Passion"],
    challenges: ["May be impractical", "Can be overwhelmed by emotions", "Might neglect reason"],
    philosophers: ["Friedrich Schiller", "Jean-Jacques Rousseau", "Friedrich Schlegel"]
  },
  {
    id: "the-phenomenologist",
    name: "The Phenomenologist",
    subtitle: "Explorer of Lived Experience",
    group: "idealists",
    color: "#553b6e",
    shortDescription: "Studies the structures of consciousness and how we experience and give meaning to the world.",
    fullDescription: "The Phenomenologist examines how consciousness experiences and constitutes the world. By carefully describing the structures of experience—perception, emotion, memory, imagination—they reveal how meaning emerges in our lived encounter with reality. Setting aside theoretical assumptions, the Phenomenologist attends to things as they actually appear to consciousness. This approach honors the richness of human experience while providing rigorous philosophical analysis.",
    strengths: ["Experiential insight", "Descriptive precision", "Meaning sensitivity", "Holistic thinking"],
    challenges: ["May be too subjective", "Can be difficult to communicate", "Might neglect external reality"],
    philosophers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Martin Heidegger"]
  },

  // Pragmatists (Green) - #578c5a
  {
    id: "the-empiricist",
    name: "The Empiricist",
    subtitle: "Student of Experience",
    group: "pragmatists",
    color: "#578c5a",
    shortDescription: "Believes all knowledge comes from sensory experience and observation of the world.",
    fullDescription: "The Empiricist holds that all knowledge ultimately derives from sensory experience. The mind begins as a blank slate, and through observation, experimentation, and reflection on experience, we build our understanding of the world. Abstract speculation without empirical grounding is viewed with suspicion. The Empiricist values evidence, observation, and the scientific method as the most reliable paths to knowledge about reality.",
    strengths: ["Evidence-based thinking", "Scientific mindset", "Practical knowledge", "Observational skills"],
    challenges: ["May miss abstract truths", "Can be too materialistic", "Might overlook innate structures"],
    philosophers: ["John Locke", "George Berkeley", "David Hume"]
  },
  {
    id: "the-pragmatist",
    name: "The Pragmatist",
    subtitle: "Seeker of What Works",
    group: "pragmatists",
    color: "#578c5a",
    shortDescription: "Judges ideas by their practical consequences and usefulness rather than abstract truth.",
    fullDescription: "The Pragmatist evaluates ideas and beliefs by their practical consequences—their 'cash value' in experience. Truth is not a static correspondence to reality but what works in practice, what helps us navigate and improve our lives. Abstract philosophical debates that make no practical difference are largely meaningless. The Pragmatist values experimentation, flexibility, and continuous learning, always asking: What difference does this make in actual life?",
    strengths: ["Practical focus", "Flexibility", "Problem-solving", "Results orientation"],
    challenges: ["May neglect deeper truths", "Can be too relativistic", "Might ignore long-term consequences"],
    philosophers: ["William James", "John Dewey", "Charles Sanders Peirce"]
  },
  {
    id: "the-naturalist",
    name: "The Naturalist",
    subtitle: "Advocate of Scientific Worldview",
    group: "pragmatists",
    color: "#578c5a",
    shortDescription: "Believes everything can be explained by natural causes and that science is our best guide to reality.",
    fullDescription: "The Naturalist holds that reality consists entirely of natural entities and processes, rejecting supernatural or non-physical explanations. Science provides our most reliable knowledge about the world, and philosophical questions should be approached with scientific methods and findings in mind. The Naturalist finds wonder in the natural world as revealed by science, seeing no need for supernatural additions. Human beings are part of nature, and our minds and values can be understood naturalistically.",
    strengths: ["Scientific literacy", "Consistency", "Rejection of superstition", "Empirical grounding"],
    challenges: ["May reduce human experience", "Can miss non-scientific insights", "Might seem cold"],
    philosophers: ["W.V.O. Quine", "Daniel Dennett", "Patricia Churchland"]
  },
  {
    id: "the-utilitarian",
    name: "The Utilitarian",
    subtitle: "Maximizer of Well-being",
    group: "pragmatists",
    color: "#578c5a",
    shortDescription: "Believes the right action is whatever produces the greatest good for the greatest number.",
    fullDescription: "The Utilitarian judges actions by their consequences, specifically by how much happiness or well-being they produce. The morally right action is whichever one maximizes overall utility—the greatest good for the greatest number. This approach is impartial, treating everyone's well-being equally regardless of personal relationships. The Utilitarian values efficiency, measurable outcomes, and the reduction of suffering across all sentient beings.",
    strengths: ["Impartiality", "Focus on outcomes", "Concern for all beings", "Clear decision-making"],
    challenges: ["May justify harmful means", "Can ignore rights", "Might be too calculating"],
    philosophers: ["Jeremy Bentham", "John Stuart Mill", "Peter Singer"]
  },

  // Traditionalists (Gold) - #ecd490
  {
    id: "the-stoic",
    name: "The Stoic",
    subtitle: "Master of Inner Peace",
    group: "traditionalists",
    color: "#ecd490",
    shortDescription: "Seeks tranquility through accepting what cannot be changed while focusing on virtue and self-control.",
    fullDescription: "The Stoic seeks inner peace through wisdom about what is and isn't within our control. External events—wealth, reputation, even death—are not truly good or bad; only our judgments and responses are up to us. By cultivating virtue, practicing self-discipline, and aligning ourselves with the rational order of nature, we can achieve tranquility regardless of circumstances. The Stoic values duty, resilience, and the development of an unshakeable character.",
    strengths: ["Emotional resilience", "Self-discipline", "Focus on virtue", "Inner peace"],
    challenges: ["May suppress emotions", "Can seem cold", "Might be too accepting of injustice"],
    philosophers: ["Epictetus", "Marcus Aurelius", "Seneca"]
  },
  {
    id: "the-virtue-ethicist",
    name: "The Virtue Ethicist",
    subtitle: "Cultivator of Character",
    group: "traditionalists",
    color: "#ecd490",
    shortDescription: "Focuses on developing good character traits rather than following rules or calculating consequences.",
    fullDescription: "The Virtue Ethicist believes that ethics is fundamentally about character—about becoming a good person rather than just doing the right thing. Virtues like courage, honesty, compassion, and wisdom are habits developed through practice, and the virtuous person naturally acts well in various situations. Moral education and role models are crucial, as we learn virtue by observing and emulating those who embody it. The good life consists in the full expression of human excellence.",
    strengths: ["Character development", "Holistic ethics", "Practical wisdom", "Role modeling"],
    challenges: ["May be culturally relative", "Can lack clear guidance", "Might favor certain characters"],
    philosophers: ["Aristotle", "Alasdair MacIntyre", "Philippa Foot"]
  },
  {
    id: "the-deontologist",
    name: "The Deontologist",
    subtitle: "Defender of Duty",
    group: "traditionalists",
    color: "#ecd490",
    shortDescription: "Believes morality consists in following rational principles and duties, regardless of consequences.",
    fullDescription: "The Deontologist holds that morality is about duty and principle, not outcomes. Certain actions are inherently right or wrong regardless of their consequences. We must never treat people merely as means to ends, and we should act only according to principles we could will to be universal laws. Rights and dignity are absolute, not to be violated even for good outcomes. The Deontologist values integrity, consistency, and respect for rational agency.",
    strengths: ["Principled action", "Respect for rights", "Moral consistency", "Protection of dignity"],
    challenges: ["May ignore consequences", "Can be rigid", "Might face conflicting duties"],
    philosophers: ["Immanuel Kant", "W.D. Ross", "Christine Korsgaard"]
  },
  {
    id: "the-communitarian",
    name: "The Communitarian",
    subtitle: "Voice of Community",
    group: "traditionalists",
    color: "#ecd490",
    shortDescription: "Emphasizes the importance of community, tradition, and shared values in shaping identity and morality.",
    fullDescription: "The Communitarian believes that individuals are fundamentally shaped by their communities and traditions. Abstract individualism ignores how our identities, values, and moral understanding emerge from participation in shared practices and cultures. The good life is found not in isolated self-creation but in membership in communities with thick traditions and shared purposes. The Communitarian values social bonds, cultural heritage, and the common good over pure individual autonomy.",
    strengths: ["Social awareness", "Cultural appreciation", "Sense of belonging", "Shared values"],
    challenges: ["May limit individual freedom", "Can be conservative", "Might exclude outsiders"],
    philosophers: ["Alasdair MacIntyre", "Michael Sandel", "Charles Taylor"]
  }
];

export const getCharacterById = (id) => {
  return characters.find(char => char.id === id);
};

export const getCharactersByGroup = (groupId) => {
  return characters.filter(char => char.group === groupId);
};
