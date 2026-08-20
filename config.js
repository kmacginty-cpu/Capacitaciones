// ============================================================
// CONFIGURACIÓN DE LA PLATAFORMA
// Reemplaza estos 3 valores con los tuyos (ver GUIA_INSTALACION.md).
// Este archivo lo comparten TODAS las páginas (portal + cada curso).
// ============================================================
window.SUPABASE_URL = "https://avohompfoqdtpfjredrf.supabase.co/rest/v1/";
window.SUPABASE_ANON_KEY = "sb_publishable_b-MutVq2FRCZrwAYdcNBVA_MLmbsKQV";
window.DOMINIO_PERMITIDO = "minciencia.gob.cl";

// ============================================================
// CATÁLOGO DE CURSOS — agrega un objeto por cada curso nuevo.
// Cuando la plataforma crezca, esta lista se puede reemplazar por
// una consulta a una tabla "cursos" en Supabase en vez de estar
// escrita a mano aquí.
// ============================================================
window.CATALOGO_CURSOS = [
    {
        id: "probidad-2026",
        titulo: "Probidad y Conflictos de Interés en el Estado",
        descripcion: "Curso obligatorio sobre la Ley 20.880: declaración de intereses y patrimonio, fideicomiso ciego y deber de abstención.",
        icono: "fa-scale-balanced",
        color: "bg-blue-600",
        url: "curso-probidad.html"
    }
    // Agrega aquí más cursos, por ejemplo:
    // {
    //   id: "ciberseguridad-2026",
    //   titulo: "Ciberseguridad Básica",
    //   descripcion: "Buenas prácticas de seguridad digital para funcionarios.",
    //   icono: "fa-shield-halved",
    //   color: "bg-emerald-600",
    //   url: "curso-ciberseguridad.html"
    // }
];
