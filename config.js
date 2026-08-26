// ============================================================
// CONFIGURACIÓN DE LA PLATAFORMA
// Este archivo lo usa index.html (la única página que queda:
// portal, curso y panel de administrador viven ahora todos ahí,
// enrutados con #/, #/curso/<id> y #/admin).
// ============================================================
window.SUPABASE_URL = "https://avohompfoqdtpfjredrf.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_b-MutVq2FRCZrwAYdcNBVA_MLmbsKQV";
window.DOMINIO_PERMITIDO = "minciencia.gob.cl";

// Logo institucional: sube la imagen al repositorio junto a
// index.html y escribe aquí su nombre exacto. Si el archivo no
// existe o falla al cargar, se muestra automáticamente un ícono
// de respaldo, así que puedes dejarlo en blanco por ahora.
window.LOGO_URL = "logo-minciencia.png";

// ============================================================
// NOTA: el catálogo de cursos ya NO se define aquí.
// Los cursos se crean y editan desde el panel de administrador
// (#/admin → pestaña "Cursos") y quedan guardados en la tabla
// "cursos" de Supabase. El curso de Probidad sigue disponible
// como respaldo automático (CURSO_SEMILLA dentro de index.html)
// hasta que lo importes a la base de datos desde ese panel.
// ============================================================
