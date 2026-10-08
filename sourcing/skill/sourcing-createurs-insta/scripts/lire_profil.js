// Lecture d'un profil Instagram en UN seul appel javascript_tool.
// À coller tel quel après navigate sur https://www.instagram.com/<pseudo>/
// Renvoie : pseudo, texte du header, liens externes, vérifié, privé, similaires.
// Aucune action sociale : il ne fait que lire et ouvrir le panneau « Comptes similaires ».
(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const pseudo = location.pathname.split('/').filter(Boolean)[0] || '';

  // 1. Attendre le header (max ~4 s) au lieu d'une pause fixe.
  let header = null;
  for (let i = 0; i < 27 && !header; i++) {
    header = document.querySelector('header');
    if (!header) await wait(150);
  }
  const bodyText = document.body.innerText || '';
  if (/Connectez-vous pour continuer|Log in to continue/i.test(bodyText) && !header) {
    return { pseudo, erreur: 'connexion_requise' };
  }
  if (!header) return { pseudo, erreur: 'pas_de_header' };

  const texte = header.innerText.replace(/\n{2,}/g, '\n').trim();
  const verifie = !!header.querySelector('svg[aria-label="Vérifié"], svg[aria-label="Verified"]');
  const prive = /Ce compte est privé|This account is private/i.test(bodyText);

  // 2. Liens externes (Instagram les emballe dans l.instagram.com/?u=...).
  const liens = [...new Set(
    [...header.querySelectorAll('a[href]')]
      .map((a) => {
        try {
          const u = new URL(a.href);
          if (u.hostname === 'l.instagram.com') return decodeURIComponent(u.searchParams.get('u') || '');
          return u.hostname.endsWith('instagram.com') ? '' : a.href;
        } catch (e) { return ''; }
      })
      .filter(Boolean)
  )];

  // 3. Comptes similaires : on note les liens de profil présents AVANT le clic,
  //    puis on ne garde que les nouveaux qui apparaissent après.
  const reserves = new Set(['explore', 'reels', 'direct', 'accounts', 'stories', 'p', 'reel', 'tv', 'about', 'legal', 'web', pseudo]);
  const profilsVisibles = () => new Set(
    [...document.querySelectorAll('a[href^="/"]')]
      .map((a) => a.getAttribute('href').split('/').filter(Boolean))
      .filter((p) => p.length === 1 && /^[A-Za-z0-9._]+$/.test(p[0]) && !reserves.has(p[0]))
      .map((p) => p[0])
  );
  const avant = profilsVisibles();
  let similaires = [];
  const icone = document.querySelector('svg[aria-label="Comptes similaires"], svg[aria-label="Similar accounts"]');
  if (icone && !prive) {
    (icone.closest('[role="button"], button') || icone.parentElement).click();
    for (let i = 0; i < 20; i++) {
      await wait(150);
      similaires = [...profilsVisibles()].filter((p) => !avant.has(p));
      if (similaires.length >= 5) break;
    }
  }

  return { pseudo, verifie, prive, texte, liens, similaires };
})();
