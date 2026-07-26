// PhilCompass Character Data
// 16 philosophical types organized into 4 groups
// Letter System: Critical(C)/Naive(N), Idealist(D)/Realist(R), External(E)/Internal(I), Act(A)/Theory(T)

export const letterDimensions = {
  first: { C: "Critical", N: "Naive" },
  second: { D: "Idealist", R: "Realist" },
  third: { E: "External", I: "Internal" },
  fourth: { A: "Act", T: "Theory" }
};

export const characterGroups = {
  go: {
    name: "The Sages",
    color: "#ecd490",
    description: "Practical wisdom, virtue, and lived experience"
  },
  gp: {
    name: "The Analysts",
    color: "#578c5a",
    description: "Systematic examination and evidence-based thinking"
  },
  mo: {
    name: "The Architects",
    color: "#553b6e",
    description: "Foundational principles and universal truths"
  },
  mp: {
    name: "The Challengers",
    color: "#c14649",
    description: "Questioning assumptions and dialectical transformation"
  }
};

export const characters = [
  // Yellow (GO) - Pragmatism, (Neo-)Aristotelian, Stoics, Phenomenology
  {
    id: "pragmatism",
    name: "Pragmatism",
    code: "CDEA",
    subtitle: "The Practical Idealist",
    group: "go",
    color: "#ecd490",
    shortDescription: "Judges ideas by their practical consequences and usefulness. Truth is what works in experience.",
    fullDescription: "Pragmatism evaluates ideas and beliefs by their practical consequences—their 'cash value' in experience. Truth is not a static correspondence to reality but what works in practice, what helps us navigate and improve our lives. Abstract philosophical debates that make no practical difference are largely meaningless. Pragmatists value experimentation, flexibility, and continuous learning, always asking: What difference does this make in actual life? This approach combines critical thinking with idealistic goals, focused on external action.",
    strengths: ["Practical focus", "Flexibility", "Problem-solving", "Results orientation"],
    challenges: ["May neglect deeper truths", "Can be too relativistic", "Might ignore long-term consequences"],
    philosophers: ["William James", "John Dewey", "Charles Sanders Peirce", "Richard Rorty"]
  },
  {
    id: "neo-aristotelian",
    name: "(Neo-)Aristotelians",
    code: "NREA",
    subtitle: "The Virtue Cultivator",
    group: "go",
    color: "#ecd490",
    shortDescription: "Focuses on developing excellent character and achieving human flourishing through virtuous action.",
    fullDescription: "Neo-Aristotelianism emphasizes virtue ethics and the cultivation of excellent character as the path to human flourishing (eudaimonia). Rather than following abstract rules or calculating consequences, the focus is on becoming a good person through practice and habituation. Virtues like courage, temperance, justice, and practical wisdom are developed through action in community. This approach trusts in natural human capacities and emphasizes the role of external practice in ethical development.",
    strengths: ["Character development", "Holistic ethics", "Practical wisdom", "Community focus"],
    challenges: ["May be culturally relative", "Can lack clear guidance", "Might favor certain character types"],
    philosophers: ["Aristotle", "Alasdair MacIntyre", "Philippa Foot", "Martha Nussbaum"]
  },
  {
    id: "stoics",
    name: "Stoics",
    code: "NDIA",
    subtitle: "The Inner Fortress",
    group: "go",
    color: "#ecd490",
    shortDescription: "Seeks tranquility through accepting what cannot be changed while focusing on virtue and self-mastery.",
    fullDescription: "Stoicism seeks inner peace through wisdom about what is and isn't within our control. External events—wealth, reputation, even death—are not truly good or bad; only our judgments and responses are up to us. By cultivating virtue, practicing self-discipline, and aligning ourselves with the rational order of nature, we can achieve tranquility regardless of circumstances. This approach combines naive trust in cosmic order with idealistic ethics, focused on internal transformation through active practice.",
    strengths: ["Emotional resilience", "Self-discipline", "Focus on virtue", "Inner peace"],
    challenges: ["May suppress emotions", "Can seem cold", "Might be too accepting of injustice"],
    philosophers: ["Epictetus", "Marcus Aurelius", "Seneca", "Zeno of Citium"]
  },
  {
    id: "phenomenology",
    name: "Phenomenology",
    code: "CRET",
    subtitle: "The Experience Explorer",
    group: "go",
    color: "#ecd490",
    shortDescription: "Studies the structures of consciousness and how we experience and give meaning to the world.",
    fullDescription: "Phenomenology examines how consciousness experiences and constitutes the world. By carefully describing the structures of experience—perception, emotion, memory, imagination—phenomenologists reveal how meaning emerges in our lived encounter with reality. Setting aside theoretical assumptions through 'bracketing,' phenomenology attends to things as they actually appear to consciousness. This critical approach to realist experience focuses on theoretical understanding of external phenomena.",
    strengths: ["Experiential insight", "Descriptive precision", "Meaning sensitivity", "Rigorous method"],
    challenges: ["May be too subjective", "Can be difficult to communicate", "Might neglect causal explanation"],
    philosophers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Martin Heidegger", "Emmanuel Levinas"]
  },

  // Green (GP) - Critical Theory, Analytic, Empiricist/Positivist, Epicurean
  {
    id: "critical-theory",
    name: "Critical Theory",
    code: "CREA",
    subtitle: "The Social Transformer",
    group: "gp",
    color: "#578c5a",
    shortDescription: "Analyzes power structures and social conditions to enable human emancipation and social change.",
    fullDescription: "Critical Theory examines society to uncover hidden power structures, ideologies, and conditions that limit human freedom and flourishing. Going beyond mere description, it aims to critique and transform oppressive social arrangements. Drawing on various traditions, critical theorists analyze how economic systems, cultural norms, and institutions shape consciousness and perpetuate domination. This approach combines critical analysis with realist assessment of social conditions, oriented toward external action for change.",
    strengths: ["Social awareness", "Power analysis", "Emancipatory focus", "Interdisciplinary thinking"],
    challenges: ["Can be overly negative", "May lack constructive alternatives", "Might dismiss individual agency"],
    philosophers: ["Theodor Adorno", "Max Horkheimer", "Jürgen Habermas", "Herbert Marcuse"]
  },
  {
    id: "analytic",
    name: "Analytic Philosophy",
    code: "CDET",
    subtitle: "The Precise Thinker",
    group: "gp",
    color: "#578c5a",
    shortDescription: "Emphasizes logical clarity, precise language, and rigorous argumentation to solve philosophical problems.",
    fullDescription: "Analytic Philosophy prioritizes clarity, precision, and rigorous argumentation. Philosophical problems are often seen as arising from linguistic confusion, so careful analysis of language and concepts is essential. Using tools from formal logic and paying close attention to the structure of arguments, analytic philosophers seek to dissolve pseudo-problems and make genuine progress on real ones. This critical, idealist approach emphasizes theoretical understanding of external conceptual structures.",
    strengths: ["Logical rigor", "Conceptual clarity", "Precise argumentation", "Problem-solving"],
    challenges: ["May be too narrow", "Can seem dry or technical", "Might miss broader context"],
    philosophers: ["Bertrand Russell", "Ludwig Wittgenstein", "W.V.O. Quine", "Saul Kripke"]
  },
  {
    id: "empiricist",
    name: "Empiricism",
    code: "NRET",
    subtitle: "The Evidence Seeker",
    group: "gp",
    color: "#578c5a",
    shortDescription: "Holds that all knowledge comes from sensory experience and observation of the world.",
    fullDescription: "Empiricism maintains that all knowledge ultimately derives from sensory experience. The mind begins as a blank slate, and through observation, experimentation, and reflection on experience, we build our understanding of the world. Abstract speculation without empirical grounding is viewed with suspicion. Empiricists value evidence, observation, and the scientific method as the most reliable paths to knowledge. This naive, realist approach focuses on theoretical understanding of external phenomena.",
    strengths: ["Evidence-based thinking", "Scientific mindset", "Practical knowledge", "Observational skills"],
    challenges: ["May miss abstract truths", "Can be too materialistic", "Might overlook innate structures"],
    philosophers: ["John Locke", "David Hume", "George Berkeley", "A.J. Ayer"]
  },
  {
    id: "epicurean",
    name: "Epicureans",
    code: "NDEA",
    subtitle: "The Pleasure Philosopher",
    group: "gp",
    color: "#578c5a",
    shortDescription: "Pursues a life of moderate pleasure, friendship, and freedom from fear and pain.",
    fullDescription: "Epicureanism seeks happiness through the pursuit of pleasure and the avoidance of pain, but not through excess—rather through moderation, friendship, and philosophical understanding. By understanding the natural world through atomistic physics and eliminating irrational fears (especially of death and the gods), we can achieve ataraxia—a state of tranquil pleasure. This naive, idealist approach emphasizes external engagement and active pursuit of the good life.",
    strengths: ["Pursuit of happiness", "Friendship values", "Freedom from anxiety", "Moderate living"],
    challenges: ["May seem hedonistic", "Can avoid difficulty", "Might neglect social duty"],
    philosophers: ["Epicurus", "Lucretius", "Philodemus", "Pierre Gassendi"]
  },

  // Purple (MO) - Kantian, Fideist, Neo-Platonism, Rationalist
  {
    id: "kantian",
    name: "Kantian",
    code: "CDIT",
    subtitle: "The Duty Defender",
    group: "mo",
    color: "#553b6e",
    shortDescription: "Grounds morality in rational duty and universal principles that respect human dignity and autonomy.",
    fullDescription: "Kantianism holds that morality is grounded in rational principles that apply universally to all rational beings. The categorical imperative commands us to act only according to principles we could will to be universal laws, and to treat humanity never merely as means but always as ends. Rights and dignity are absolute, grounded in rational autonomy. This critical, idealist approach emphasizes internal theoretical reflection on the structure of moral reason.",
    strengths: ["Principled action", "Respect for dignity", "Universal ethics", "Rational foundation"],
    challenges: ["May seem rigid", "Can ignore consequences", "Might face conflicting duties"],
    philosophers: ["Immanuel Kant", "Christine Korsgaard", "Onora O'Neill", "John Rawls"]
  },
  {
    id: "fideist",
    name: "Fideism",
    code: "NRIA",
    subtitle: "The Faith Embracer",
    group: "mo",
    color: "#553b6e",
    shortDescription: "Holds that faith transcends and is independent of reason, providing access to truths reason cannot reach.",
    fullDescription: "Fideism maintains that religious belief is based on faith rather than reason, and that faith can provide access to truths that transcend rational understanding. Rather than seeing this as a limitation, fideists embrace the limits of reason and find meaning through commitment and trust. Some truths are simply beyond what logic and evidence can establish. This naive, realist approach focuses on internal transformation through active faith commitment.",
    strengths: ["Openness to mystery", "Commitment", "Humility about reason", "Spiritual depth"],
    challenges: ["May seem irrational", "Can resist dialogue", "Might justify anything"],
    philosophers: ["Søren Kierkegaard", "Blaise Pascal", "Tertullian", "Alvin Plantinga"]
  },
  {
    id: "neo-platonism",
    name: "Neo-Platonism",
    code: "NDET",
    subtitle: "The Unity Seeker",
    group: "mo",
    color: "#553b6e",
    shortDescription: "Seeks return to the One through contemplation, understanding reality as emanation from divine unity.",
    fullDescription: "Neo-Platonism understands reality as a series of emanations from the One—the ultimate, ineffable source of all being. Through philosophical contemplation and spiritual practice, the soul can ascend back toward unity with this divine source. The material world is not evil but is the furthest emanation from the One, and beauty and goodness in the world can guide us upward. This naive, idealist approach emphasizes internal theoretical contemplation of eternal truths.",
    strengths: ["Spiritual insight", "Appreciation of beauty", "Contemplative depth", "Unified worldview"],
    challenges: ["May devalue material world", "Can seem mystical", "Might be hierarchical"],
    philosophers: ["Plotinus", "Proclus", "Pseudo-Dionysius", "Marsilio Ficino"]
  },
  {
    id: "rationalist",
    name: "Rationalism",
    code: "NRIT",
    subtitle: "The Reason Champion",
    group: "mo",
    color: "#553b6e",
    shortDescription: "Believes knowledge comes primarily from reason and that some ideas are innate within us.",
    fullDescription: "Rationalism holds that the mind possesses innate ideas and that reason is the primary source of knowledge. Certain truths—mathematical, logical, and metaphysical—can be known independently of sensory experience. Through careful introspection and rational analysis, we can discover fundamental principles about reality that are necessarily true. The Rationalist trusts the power of the mind above all else. This naive, realist approach emphasizes internal theoretical reflection.",
    strengths: ["Systematic thinking", "A priori reasoning", "Conceptual clarity", "Deductive power"],
    challenges: ["May undervalue experience", "Can be too abstract", "Might miss empirical insights"],
    philosophers: ["René Descartes", "Baruch Spinoza", "Gottfried Leibniz", "Christian Wolff"]
  },

  // Red (MP) - Existentialist, Postmodernism, Hegelian, Skeptics
  {
    id: "existentialist",
    name: "Existentialism",
    code: "CRIA",
    subtitle: "The Authentic Self",
    group: "mp",
    color: "#c14649",
    shortDescription: "Believes existence precedes essence—we must create our own meaning through authentic choice and commitment.",
    fullDescription: "Existentialism confronts the fundamental absurdity of existence and takes radical responsibility for creating meaning. Rejecting predetermined essences or purposes, existentialists believe we are 'condemned to be free' and must authentically choose our values and projects. Anxiety and dread are natural responses to this freedom, but through authentic choice, we can create a meaningful life. This critical, realist approach emphasizes internal transformation through active commitment.",
    strengths: ["Authenticity", "Personal responsibility", "Creative meaning-making", "Courage"],
    challenges: ["May feel isolated", "Can experience anxiety", "Might struggle with shared values"],
    philosophers: ["Jean-Paul Sartre", "Simone de Beauvoir", "Albert Camus", "Martin Heidegger"]
  },
  {
    id: "postmodernism",
    name: "Postmodernism",
    code: "CDIA",
    subtitle: "The Grand Narrative Critic",
    group: "mp",
    color: "#c14649",
    shortDescription: "Questions universal truths and grand narratives, emphasizing plurality, difference, and the constructed nature of knowledge.",
    fullDescription: "Postmodernism critiques the grand narratives and universal claims of modernity. Truth, knowledge, and identity are seen as constructed through language, power, and social practices rather than discovered as objective facts. Embracing plurality and difference, postmodernists resist totalizing systems and celebrate the play of interpretations. This critical, idealist approach emphasizes internal transformation through active deconstruction and creative reinterpretation.",
    strengths: ["Critical awareness", "Appreciation of difference", "Resistance to dogma", "Creative thinking"],
    challenges: ["May seem relativistic", "Can undermine shared truth", "Might be self-refuting"],
    philosophers: ["Jacques Derrida", "Michel Foucault", "Jean-François Lyotard", "Judith Butler"]
  },
  {
    id: "hegelian",
    name: "Hegelian",
    code: "CRIT",
    subtitle: "The Dialectical Thinker",
    group: "mp",
    color: "#c14649",
    shortDescription: "Understands reality as the unfolding of Spirit through dialectical development and historical progress.",
    fullDescription: "Hegelianism sees reality as the self-development of Absolute Spirit through dialectical process. History, thought, and nature unfold through the movement of thesis, antithesis, and synthesis, with contradictions driving progress toward greater rationality and freedom. Nothing can be understood in isolation; everything must be grasped in relation to the whole. This critical, realist approach focuses on internal theoretical understanding of how reality develops through contradiction.",
    strengths: ["Systematic thinking", "Historical understanding", "Dialectical reasoning", "Holistic vision"],
    challenges: ["Can be obscure", "May seem deterministic", "Might justify status quo"],
    philosophers: ["G.W.F. Hegel", "F.H. Bradley", "Slavoj Žižek", "Robert Brandom"]
  },
  {
    id: "skeptics",
    name: "Skepticism",
    code: "NDIT",
    subtitle: "The Perpetual Questioner",
    group: "mp",
    color: "#c14649",
    shortDescription: "Questions all knowledge claims and suspends judgment, finding peace in acknowledging uncertainty.",
    fullDescription: "Skepticism approaches all claims with doubt and critical scrutiny, recognizing the limitations of human knowledge and the many ways we can be deceived. Rather than accepting beliefs dogmatically, skeptics suspend judgment (epochē) and continue to investigate. This philosophical humility leads to intellectual freedom and a kind of peace (ataraxia) that comes from releasing the anxiety of needing certainty. This naive, idealist approach emphasizes internal theoretical reflection on the limits of knowledge.",
    strengths: ["Critical thinking", "Intellectual humility", "Open-mindedness", "Freedom from dogma"],
    challenges: ["May struggle with decisions", "Can seem nihilistic", "Might undermine helpful beliefs"],
    philosophers: ["Pyrrho", "Sextus Empiricus", "Michel de Montaigne", "David Hume"]
  }
];

export const getCharacterById = (id) => {
  return characters.find(char => char.id === id);
};

export const getCharactersByGroup = (groupId) => {
  return characters.filter(char => char.group === groupId);
};

export const getCharacterByCode = (code) => {
  return characters.find(char => char.code === code);
};
