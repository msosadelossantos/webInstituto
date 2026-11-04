import { areas, inscription, email } from './data.js';
import { coursesByArea } from './courses.js';

// Source content is rendered as escaped text; no original WordPress markup executes.
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = 'target="_blank" rel="noopener"';
const courseHref = (area, course) => `#/curso/${area.id}/${course.id}`;
const heading = (label, title, description) => `<div class="page-intro container"><p class="eyebrow">${escape(label)}</p><h1>${escape(title)}</h1>${description ? `<p class="lead">${escape(description)}</p>` : ''}</div>`;
const enrollment = () => `<aside class="enrollment"><p class="eyebrow">TU PRÓXIMO PASO</p><h3>Educación pública.<br>Formación gratuita.</h3><p>Confirmá las fechas, la sede y la disponibilidad antes de formalizar tu inscripción.</p><a class="button" ${external} href="${inscription}">Inscripción en IPFL ↗</a><a class="text-link purple" href="#/contacto">Consultar al centro →</a><a class="text-link purple" href="#/sedes">Conocer las sedes →</a></aside>`;

export function areaPage(id) {
  const area = areas.find(a => a.id === id);
  if (!area) return null;
  const courses = coursesByArea[id] || [];
  return `${heading('ÁREA DE FORMACIÓN · '+area.category, area.name, area.description)}<section class="container course-catalog"><a class="text-link purple" href="#/areas">← Todas las áreas</a><div class="section-heading course-heading"><div><p class="eyebrow">ELEGÍ POR DÓNDE EMPEZAR</p><h2>Cursos de esta área.</h2></div><p>${courses.length} propuestas de formación gratuita. Entrá a cada curso para conocer el programa y los requisitos.</p></div><div class="course-grid">${courses.map(c => `<article class="course-card"><div class="card-top"><span class="tag">Formación gratuita</span>${c.duration ? `<span class="course-duration">${escape(c.duration)}</span>` : ''}</div><h3><a href="${courseHref(area,c)}">${escape(c.name)}</a></h3><p>${escape(c.description)}</p><a class="text-link purple" href="${courseHref(area,c)}">Ver programa y requisitos →</a></article>`).join('')}</div><p class="course-update">Información de cursos actualizada el 3 de noviembre de 2026. Consultá al centro por cambios de horarios y disponibilidad.</p><div class="course-help"><div><h3>¿Necesitás ayuda para elegir?</h3><p>Te orientamos sobre requisitos, horarios e inscripción.</p></div><a class="button" href="#/contacto">Hacé tu consulta ↗</a></div></section>`;
}

function renderBlocks(blocks) {
  let html = '', listOpen = false;
  for (const block of blocks) {
    if (block.type === 'li') {
      if (!listOpen) { html += '<ul>'; listOpen = true; }
      html += `<li>${escape(block.text)}</li>`;
    } else {
      if (listOpen) { html += '</ul>'; listOpen = false; }
      const tag = /^h[1-6]$/.test(block.type) ? 'h2' : 'p';
      html += `<${tag}>${escape(block.text)}</${tag}>`;
    }
  }
  return html + (listOpen ? '</ul>' : '');
}

export function coursePage(areaId, courseId) {
  const area = areas.find(a => a.id === areaId);
  const course = coursesByArea[areaId]?.find(c => c.id === courseId);
  if (!area || !course) return null;
  return `${heading(area.name+' · FORMACIÓN GRATUITA', course.name, '')}<section class="container course-layout"><article class="course-content"><nav class="breadcrumbs" aria-label="Ruta de navegación"><a href="#/areas">Formación</a><span aria-hidden="true">/</span><a href="#/area/${area.id}">${escape(area.name)}</a></nav><div class="detail-benefits"><span>✓ Curso gratuito</span><span>✓ Certificación oficial</span>${course.duration ? `<span>◷ ${escape(course.duration)}</span>` : ''}</div>${renderBlocks(course.blocks)}<p class="course-update">Información actualizada el 3 de noviembre de 2026. Los horarios y la disponibilidad pueden cambiar; confirmalos con el centro antes de inscribirte.</p><a class="button outline" href="#/area/${area.id}">← Más cursos de ${escape(area.name)}</a></article>${enrollment()}</section>`;
}

export function courseTitle(areaId, courseId) {
  return coursesByArea[areaId]?.find(c => c.id === courseId)?.name;
}

export function privacyPage() {
  return `${heading('INFORMACIÓN DEL SITIO', 'Privacidad y contacto.', 'Cómo funciona esta web y qué ocurre con los datos de tu consulta.')}<section class="container section narrow privacy-content"><h2>Consultas por correo</h2><p>El formulario prepara un mensaje con tu nombre, email, área de interés y consulta. Al continuar, se abre tu aplicación de correo para que puedas revisar y enviar el mensaje a <a href="mailto:${email}">${email}</a>. Completar el formulario no envía automáticamente la consulta al centro ni la guarda en una base de datos de esta SPA.</p><h2>Inscripción y servicios externos</h2><p>Las inscripciones se gestionan en el portal del IPFL. Los enlaces para ver ubicaciones abren Google Maps. Cada servicio externo aplica sus propias condiciones y políticas de privacidad.</p><h2>Recursos y alojamiento</h2><p>Esta web carga las tipografías desde Google Fonts. La versión de revisión alojada en Sites puede solicitar que inicies sesión con ChatGPT. Esos proveedores procesan las conexiones necesarias para prestar sus servicios.</p><h2>Almacenamiento en tu navegador</h2><p>El código de esta SPA no utiliza cookies propias, almacenamiento local ni herramientas de analítica. Los datos que escribís en el formulario no se conservan al recargar o salir de la página. Tu navegador o aplicación de correo pueden gestionar sus propias funciones de autocompletado y borradores.</p><h2>Cómo contactarnos</h2><p>Para consultas sobre la información que enviás por email, escribí al centro a <a href="mailto:${email}">${email}</a>.</p><a class="button outline" href="#/contacto">Ir a contacto →</a></section>`;
}
