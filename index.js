const questions = [
    {
      question: "What is Magento primarily used for?",
      answers: [
        "Content management",
        "Customer relationship management",
        "E-commerce platform",
      ],
      correctAnswer: 2
    },
    {
      question: "What does CTR stand for in Digital Marketing?",
      answers: [
        "Click-Through Rate",
        "Customer Tracking Record",
        "Conversion Tracking Ratio",
      ],
      correctAnswer: 0
    },
    {
      question: "What is Klaviyo commonly used for?",
      answers: [
        "Email marketing",
        "Social media management",
        "Website analytics",
      ],
      correctAnswer: 0
    },
    {
      question: "What is the main goal of Google Ads?",
      answers: [
        "Increasing website traffic",
        "Enhancing social media presence",
        "Improving search engine rankings",
      ],
      correctAnswer: 0
    },
    {
      question: "What is one of the key elements of a successful digital marketing strategy?",
      answers: [
        "Keyword stuffing",
        "Consistency in branding",
        "Ignoring analytics",
      ],
      correctAnswer: 1
    },
    {
      question: "What is CTC in digital marketing?",
      answers: [
        "Customer Targeting Campaign",
        "Call-To-Click",
        "Cost-Per-Click",
      ],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of A/B testing?",
      answers: [
        "To create brand awareness",
        "To optimize conversion rates",
        "To track email open rates",
      ],
      correctAnswer: 1
    },
    {
      question: "What does SEO stand for?",
      answers: [
        "Social Engagement Optimization",
        "Search Engine Optimization",
        "Sales Enhancement Outreach",
      ],
      correctAnswer: 1
    },
    {
      question: "Which type of campaign is used to re-engage users who previously interacted with a website?",
      answers: [
        "Display ads",
        "Search ads",
        "Remarketing ads",
      ],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of responsive web design?",
      answers: [
        "To increase bounce rate",
        "To provide a consistent user experience across devices",
        "To decrease website traffic",
      ],
      correctAnswer: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correctAnswers = new Set()
  const questionsTotal = questions.length
  const displayTotal = document.querySelector('#correctAnswersTotal span')
  displayTotal.textContent = correctAnswers.size + ' of ' + questionsTotal
  
  // Loop:
  for(const item of questions) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.question
  
    for(let answer of item.answers) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = answer
      dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
      dt.querySelector('input').value = item.answers.indexOf(answer)
      dt.querySelector('input').onchange = () => {
        const isCorrect = event.target.value == item.correctAnswer
        correctAnswers.delete(item)
        if (isCorrect) {
          correctAnswers.add(item)
        }
  
        displayTotal.textContent = correctAnswers.size + ' of ' + questionsTotal
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  // Display Questions on Screen:
    quiz.appendChild(quizItem)
  }