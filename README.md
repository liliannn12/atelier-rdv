# Atelier RDV

Prise de rendez-vous en ligne pour indépendants : coachs, thérapeutes, artisans.

Le client réserve un créneau sans appeler. Le professionnel publie ses disponibilités et suit son agenda au même endroit.

## Problème

Beaucoup d'indépendants gèrent encore leurs rendez-vous par messages. Chaque demande déclenche des allers-retours : jour, heure, durée, confirmation. Des créneaux se perdent, des demandes restent sans réponse.

Atelier RDV remplace cet échange par une page publique de réservation et un espace professionnel. Le cœur du produit est le calendrier : prestations, durées, disponibilités, et uniquement les créneaux réellement libres.

## Utilisateurs

- **Client** — consulte les créneaux ouverts et réserve.
- **Professionnel** — définit ses prestations et ses disponibilités, puis consulte, confirme ou annule ses rendez-vous.

## Périmètre V1

Inclus :

- Un seul professionnel
- Prestations avec une durée
- Disponibilités publiées par le professionnel
- Réservation par le client sur un créneau libre
- Consultation, confirmation et annulation côté professionnel

Hors V1 :

- Paiement en ligne
- Plusieurs praticiens
- Rappels SMS ou e-mail
- Synchronisation Google Calendar ou Outlook

## Stack

- **Front** — Vue 3, Vite, TypeScript
- **API** — Hono, TypeScript
- **Données** — PostgreSQL
- **Outillage** — pnpm, Docker Compose

Vue porte la page de réservation et l'agenda. Hono expose une API légère. PostgreSQL conserve les rendez-vous et les règles de disponibilité.

## Conventions

- TypeScript en mode strict
- ESLint et Prettier
- Conventional Commits (`feat:`, `fix:`, `docs:`)
- Un commit correspond à une intention

## Statut

Le contexte métier est posé. Le setup, les captures d'écran et les décisions d'architecture arriveront dans les commits suivants.
