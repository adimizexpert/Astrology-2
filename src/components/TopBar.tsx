const TopBar = () => {
  const messages = [
    "🔮 Free Consultation - पहला परामर्श निःशुल्क",
    "📞 Call Now: +91 8427177728",
    "⭐ 25+ Years Experience",
    "✨ 50,000+ Cases Solved",
    "🕉️ 100% Confidential",
    "⚡ Instant Results - तुरंत समाधान",
    "💑 Love Marriage Specialist",
    "🔮 Free Consultation - पहला परामर्श निःशुल्क",
    "📞 Call Now: +91 8427177728",
    "⭐ 25+ Years Experience",
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 overflow-hidden bg-gradient-gold py-2">
      <div className="marquee-container">
        <div className="marquee-content">
          {messages.map((message, index) => (
            <span
              key={index}
              className="mx-8 inline-block whitespace-nowrap text-sm font-semibold text-primary-foreground"
            >
              {message}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {messages.map((message, index) => (
            <span
              key={`dup-${index}`}
              className="mx-8 inline-block whitespace-nowrap text-sm font-semibold text-primary-foreground"
            >
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
