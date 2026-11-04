// Editá este archivo para mantener el contenido. No requiere compilación.
export const inscription = 'https://cursosipfl.trabajo.gba.gob.ar/';
export const email = 'cfl402malvinasargentinas@gmail.com';
export const areas = [
 ['informatica','Informática','Tecnología y herramientas digitales para dar el próximo paso en tu vida laboral.','Digital','⌘','informatica'],
 ['gastronomia','Gastronomía','Transformá tu pasión por la cocina en nuevas posibilidades de trabajo.','Oficios','♨','area-gastronomia'],
 ['electricidad','Energía eléctrica','Formate en un oficio técnico y desarrollá habilidades para el mundo del trabajo.','Técnica','ϟ','area-energia-electrica'],
 ['administracion','Administración','Herramientas para acompañar la gestión de organizaciones y emprendimientos.','Gestión','▤','area-administracionn'],
 ['construccion','Construcción','Conocimientos y práctica para construir tu camino profesional.','Técnica','⌂','area-construccion'],
 ['metalmecanica','Metalmecánica','Aprendizajes técnicos aplicados al trabajo con metales.','Técnica','⚙','metal-mecanica'],
 ['textil','Textil','Desarrollá tus habilidades y explorá las posibilidades de la producción textil.','Oficios','✂','area-textil'],
 ['cultura','Industrias culturales y creativas','Un espacio de formación para poner en movimiento tus ideas.','Creatividad','✳','industrias-culturales-y-creativas'],
 ['refrigeracion','Refrigeración','Capacitación técnica para ampliar tus oportunidades laborales.','Técnica','❄','area-refrigeracion'],
 ['madera','Madera y mueble','Aprendé un oficio que une técnica, materiales y creatividad.','Oficios','▧','cuero-y-calzado'],
 ['cuidados','Cuidados y servicios sociocomunitarios','Formación para acompañar a las personas y a la comunidad.','Comunidad','♡','area-cuidados-y-servicios-sociocomunitarios'],
 ['artesanales','Oficios artesanales','Convertí el trabajo con tus manos en nuevas oportunidades.','Creatividad','◇','oficios-artesanales']
].map(([id,name,description,category,icon,path])=>({id,name,description,category,icon,url:`#/area/${id}`}));
export const campuses = [
 {name:'Sede central',city:'Grand Bourg',address:'Av. del Sesquicentenario 1175'},
 {name:'Subsede CFP 401',city:'Tortuguitas',address:'Cura Brochero 2997'},
 {name:'Centro Educativo San Ignacio',city:'Villa de Mayo',address:'Eva Perón 5140'}
];
export const faqs = [
 ['¿Las capacitaciones tienen algún costo?','No. Todos nuestros cursos y capacitaciones son gratuitos. La educación pública es la base de nuestra propuesta.'],
 ['¿A partir de qué edad puedo inscribirme?','Podés empezar a partir de los 16 años. Algunas formaciones requieren secundario completo; revisá los requisitos específicos del curso que te interesa.'],
 ['¿Qué documentación tengo que presentar?','Para formalizar la inscripción necesitás fotocopia de DNI (frente y dorso) y del certificado de estudios. Consultá al centro la cantidad de copias y los requisitos del curso elegido.'],
 ['¿Los certificados son oficiales?','Sí. Al aprobar la formación recibís un certificado oficial avalado por la Dirección General de Cultura y Educación de la Provincia de Buenos Aires y el Ministerio de Trabajo.'],
 ['¿En qué horarios puedo cursar?','Hay formaciones en los turnos mañana, tarde y noche. Los días y horarios dependen de cada curso. La atención al público es de lunes a viernes de 08:00 a 20:00.'],
 ['¿Cómo puedo inscribirme?','Consultá la oferta en el portal oficial del IPFL y verificá los requisitos, la sede y la disponibilidad de tu formación. También podés acercarte a la sede central para recibir orientación.']
];
