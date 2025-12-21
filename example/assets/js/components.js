const Components = (() => {
  const baseButtonClasses = 'btn inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10';
  const cardClasses = 'card transition duration-300 hover:-translate-y-0.5';
  const cardBodyClasses = 'glass ring-gradient rounded-xl p-5 h-full flex flex-col';

  const createLinkButton = ({ label, href, icon }) => {
    const link = document.createElement('a');
    link.className = baseButtonClasses;
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';

    const iconEl = document.createElement('i');
    iconEl.className = icon;
    link.append(iconEl, document.createTextNode(` ${label}`));
    return link;
  };

  const createBadge = (accent) => {
    const badge = document.createElement('div');
    badge.className = `h-10 w-10 rounded-lg bg-gradient-to-br ${accent}`;
    return badge;
  };

  const createCard = (card, delayMs) => {
    const article = document.createElement('article');
    article.className = cardClasses;
    article.dataset.name = card.searchKey.toLowerCase();
    article.dataset.aos = 'fade-up';
    article.dataset.aosDelay = String(delayMs);

    const body = document.createElement('div');
    body.className = cardBodyClasses;

    const heading = document.createElement('div');
    heading.className = 'flex items-center gap-3';
    heading.append(createBadge(card.accent));

    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold';
    title.textContent = card.name;
    heading.append(title);

    const email = document.createElement('p');
    email.className = 'mt-3 text-sm text-slate-300';
    const label = document.createTextNode('E-mail: ');
    const mail = document.createElement('a');
    mail.className = 'underline decoration-dotted hover:text-brand-300';
    mail.href = `mailto:${card.email}`;
    mail.textContent = card.email;
    email.append(label, mail);

    const linksWrapper = document.createElement('div');
    linksWrapper.className = 'mt-4 flex flex-wrap gap-2';
    card.links.forEach((link) => linksWrapper.append(createLinkButton(link)));

    body.append(heading, email, linksWrapper);
    article.append(body);
    return article;
  };

  return {
    createCard
  };
})();
