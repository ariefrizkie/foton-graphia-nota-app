function Card({ accent, title, content, detail, accentDetail }) {
  return (
    <div
      className={`card-accent rounded-xl p-4 border border-light-border bg-light-surface dark:border-dark-border dark:bg-dark-surface border-l-4 ${accent}`}
    >
      <div className="text-sm font-medium mb-2 text-light-muted dark:text-dark-muted">
        {title}
      </div>
      <div className="text-xl font-semibold mb-2 dark:text-dark-text">
        {content}
      </div>
      <div
        className={`flex items-center gap-0.5 text-xs font-semibold ${accentDetail}`}
      >
        {detail}
      </div>
    </div>
  );
}

export default Card;
