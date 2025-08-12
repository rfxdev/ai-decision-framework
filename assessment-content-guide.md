# Assessment Design Guide: Creating High-Quality Sections, Pages, Questions and Options

## Core Principles

### Keep It Simple

- **Clear questions with clear options should be the primary goal**
- Avoid information overload - users need just enough context to make confident decisions
- All necessary context should be built into question text and option descriptions
- Self-explanatory design eliminates the need for additional hints or explanations

### Focus on User Experience

- Questions should be self-explanatory without requiring external context
- Options should be descriptive enough that users can easily identify which applies to them
- Avoid forcing users through irrelevant decision paths

### Pre-Implementation Focus

- **Distinguish between organisational capabilities and system-specific implementations**
- Ask about existing organisational resources: "Do you have MLOps teams?" (organisational capability)
- Ask about implementation intent for system-specific features: "Can you implement content filtering?" (implementation capability)
- Avoid assumptions about existing AI systems or deployed safeguards
- Focus on what users can realistically commit to doing or already have as organisational capabilities

## Assessment Structure

### Section Design

Sections group related pages into coherent evaluation areas that users can understand and navigate efficiently.

#### Section Metadata

- **ID**: Use kebab-case identifiers that clearly indicate the evaluation focus
- **Title**: Concise, action-oriented titles that describe what users will determine
- **Description**: Brief explanation of the section's purpose and outcomes
- **Page Order**: Logical progression within the evaluation area

#### Section Grouping Principles

- **Logical Cohesion**: Pages within a section should address related aspects of the same evaluation dimension
- **User Mental Models**: Group evaluations the way users naturally think about the problem
- **Reasonable Length**: 3-5 pages per section to maintain focus

#### Section Ordering Principles
- **Technical Feasibility First**: Establish whether AI is fundamentally suitable before diving into implementation details
- **Risk Before Operations**: Understand potential consequences before evaluating organisational capabilities
- **Fail Fast**: Users should encounter dead-ends early rather than working through irrelevant implementation questions

#### Section Examples and Guidelines

##### Technical Feasibility Section

```json
{
  "id": "technical-feasibility",
  "title": "Technical Feasibility",
  "description": "Determine if AI is the right technical solution for your problem",
  "pageOrder": ["data-structure", "deterministic-outputs", "domain-knowledge"]
}
```

_Design focus: fundamental compatibility between problem and AI capabilities; avoid getting into specific model or architecture choices; emphasise whether AI adds genuine value over conventional approaches_

##### Risk and Safety Section

```json
{
  "id": "risk-safety",
  "title": "Risk and Safety Assessment",
  "description": "Evaluate potential consequences of AI failures and required safeguards",
  "pageOrder": ["risk-impact", "failure-recovery", "bias-impact"]
}
```

_Design focus: start with consequence assessment before diving into mitigation capabilities; focus on harm potential rather than technical risk management; consider both immediate and downstream effects of failures_

##### Implementation and Operations Section

```json
{
  "id": "implementation-operations",
  "title": "Implementation and Operations",
  "description": "Assess organisational capability to build and maintain the AI solution",
  "pageOrder": ["monitoring", "pii-data-location", "public-facing"]
}
```

_Design focus: distinguish between one-time setup costs and ongoing operational requirements; focus on organisational capabilities rather than technical implementation details; consider regulatory and compliance requirements specific to the domain_

### Page Structure

#### Page Titles

- Be specific and descriptive: "Risk Impact Assessment" > "Risk Assessment"
- Focus on the outcome/purpose rather than just the topic
- Consider what the page is actually evaluating (impact, feasibility, recovery, etc.)

#### Question Design

- **Make questions contextually relevant** - include examples or clarifiers in parentheses when helpful
- **Embed all necessary context** directly in the question text rather than relying on separate explanations
- **Use filtering questions** to route users appropriately (e.g., "How critical is it that..." lets users self-select based on their context)
- **Avoid assumptions** about what users need - let them indicate their priorities
- **Combine related concepts** in single questions when it simplifies the flow
- **Frame for feasibility assessment** - ask about capabilities and commitments, not existing implementations

##### Good Question Examples:

- "Does your use case involve mostly structured and consistently formatted data (databases, spreadsheets, logs)?"
- "How critical is it that users can recover from AI errors in your use case?"
- "Can users both detect AI failures and successfully work around them?"
- "Can you implement real-time content filtering, user reporting systems, and 24/7 monitoring for your public-facing AI?"

#### Question Framing Patterns:

**✅ Good - Organisational Capabilities (What You Have)**

- "Do you have dedicated DevOps/MLOps teams and infrastructure?"
- "Can you sustain the ongoing monitoring and maintenance effort required?"
- "Do you have domain expert commitment for training data collection?"

**✅ Good - Implementation Capabilities (What You Can Build)**

- "Can you implement real-time content filtering, user reporting systems, and 24/7 monitoring?"
- "Will you be able to establish clear audit trails for all decisions?"
- "Could this task be solved with traditional software instead of AI?"

**❌ Poor - Assumes Existing AI Systems**

- "Do you have comprehensive AI safeguards in place?"
- "Are your current AI monitoring systems adequate?"
- "How well do your existing AI controls work?"

**❌ Poor - Subjective Self-Assessment**

- "Are your safeguards adequate?"
- "Is your team competent enough?"
- "How good is your AI security?"

#### Option Design

- **Make options descriptive and self-contained** - avoid simple "Yes/No" answers
- **Include the key qualifier** in the option text: "Yes - failures could have serious consequences"
- **Use parallel structure** across options for consistency
- **Consider the user's perspective** - what would they recognise as their situation?
- **Build in enough context** so users can confidently select without additional explanation
- **Frame options around concrete capabilities** rather than subjective judgments

##### Good Option Examples:

- "No - outcomes are low-stakes" vs "Yes - failures could have serious consequences"
- "Not critical - some error rate is acceptable" vs "Critical - users need to be able to handle failures"
- "Yes - we can implement these safety measures" vs "No - we lack resources or expertise for these measures"

## Classification Strategy

### Three-Tier System Works Well

- **Good**: Solution is suitable with this approach
- **Caution**: Solution can work but requires careful consideration
- **Dead_end**: Solution is not viable with current constraints
- **Unknown**: More information needed (triggers follow-up questions)

### Context-Dependent Classifications

- The same technical outcome can have different classifications based on context
- Example: "AI-led with human oversight" vs "Human-led with AI support" - both can be "good" in different risk scenarios

### Avoid Self-Assessment Traps

- Don't ask users to evaluate their own competence in areas where they may lack expertise
- **Distinguish between organisational resources and system implementations**:
  - Organisational capabilities: "Do you have MLOps teams?" (users know their org structure)
  - Implementation capabilities: "Can you implement monitoring systems?" (commitment to build)
  - Avoid: "Are your systems adequate?" (subjective judgment users may not be qualified to make)
- Focus on objective capabilities and resource commitments rather than subjective adequacy

## Question Flow Design

### Use Filtering Questions

- Start with broad context questions that route users to relevant detailed paths
- Let users skip irrelevant sections rather than forcing everyone through the same flow
- Example: Ask about criticality first, then dive into details only for those who need it

### Minimise Nesting Depth

- Two levels of questions usually sufficient for most decision trees within a page
- If you need more depth, consider whether the evaluation should span multiple pages
- Complex trees may indicate the need for a separate section

### Logical Progression

- Each follow-up question should feel like a natural next step
- Unknown classifications should bridge smoothly to follow-up questions
- Dead ends should be definitive - avoid recommendations that suggest the approach could still work

## Feedback Content Guidelines

### Structure by Classification Type

#### Good Classification:

- **Reasoning**: Why this approach works well
- **Recommendations**: Best practices for implementation
- **Risks + Mitigations**: What to watch out for and how to address it

#### Caution Classification:

- **Reasoning**: Why this can work but needs care
- **Recommendations**: How to implement successfully
- **Risks + Mitigations**: Critical considerations for success

#### Dead_end Classification:

- **Reasoning**: Why this approach won't work
- **Consequences**: What problems this creates
- **Recommendations**: Usually minimal - focus on why not to proceed

#### Unknown Classification:

- **Reasoning**: Why more information is needed
- Keep brief since follow-up questions provide the detail

### Content Principles

- **Be feasibility-focused** - this is about deciding whether to proceed, not designing systems
- **Avoid redesign recommendations** for dead ends - the assessment is pre-design
- **Use parallel structure** - similar classifications should have similar feedback types
- **Be actionable** - recommendations should be concrete and implementable

## Common Patterns That Work

### Risk Assessment Pattern

1. Identify risk level (high/low)
2. For high risk: Assess scalability of required safeguards
3. Classifications: Low risk → good, High + scalable → caution, High + unscalable → dead end

### Failure Handling Pattern

1. Filter by criticality (critical/not critical)
2. For critical: Assess user capability to handle failures
3. Classifications: Not critical → good, Critical + manageable → good, Critical + unmanageable → dead end

### User Experience Pattern

1. Assess user blocking vs non-blocking scenarios
2. For blocking: Evaluate recovery mechanisms
3. Route users away from irrelevant paths early

### Capability Assessment Pattern

1. Identify situations requiring specific capabilities
2. Ask about concrete implementation abilities rather than subjective adequacy
3. Classifications: Can implement → caution/good, Cannot implement → dead end

## Quality Checklist

### Before Creating JSON

- [ ] Section groupings feel natural and coherent to users
- [ ] Section descriptions clearly indicate evaluation outcomes
- [ ] Page titles are specific and outcome-focused
- [ ] Questions include all necessary context and examples
- [ ] Questions focus on capabilities and commitments, not existing systems
- [ ] Options are descriptive, self-contained, and parallel in structure
- [ ] Classifications make sense for the context
- [ ] Feedback is appropriate for pre-design feasibility assessment
- [ ] No external explanations or hints needed for user comprehension
- [ ] Questions avoid asking users to self-assess their own competence

### Content Review

- [ ] Sections are ordered logically - technical feasibility before implementation details
- [ ] Unknown classifications bridge smoothly to follow-ups
- [ ] Dead ends are definitive without false hope
- [ ] Good/Caution recommendations are actionable
- [ ] Risk mitigations are practical and specific
- [ ] No redundant information across feedback types
- [ ] Questions ask about concrete capabilities rather than subjective judgments
