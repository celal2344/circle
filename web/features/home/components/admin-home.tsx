const nextMilestones = [
  "Supabase proje yapısını başlat",
  "shared/domain şemalarını oluştur",
  "E-posta OTP ve rol onboarding akışını kur",
  "İşletme davet ve Organizer onay akışlarını tasarla"
];

export function AdminHome() {
  return (
    <main className="admin-home">
      <section>
        <p>Circle Admin</p>
        <h1>İstanbul pilot operasyonları</h1>
        <p>
          Bu panel İşletme davetleri, Organizer onayları, etkinlik operasyonu ve
          güven sinyalleri için geliştirilecek.
        </p>
      </section>

      <section>
        <h2>Sıradaki temel işler</h2>
        <ul>
          {nextMilestones.map((milestone) => (
            <li key={milestone}>{milestone}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
