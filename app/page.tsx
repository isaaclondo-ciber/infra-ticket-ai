export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold mb-6">
            Automatización Inteligente de Solicitudes de Infraestructura
          </h1>

          <p className="text-xl max-w-3xl">
            Proyecto universitario que transforma solicitudes enviadas por
            Microsoft Teams en tickets estructurados mediante Inteligencia
            Artificial Generativa y automatización.
          </p>

        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Descripción del Proyecto
        </h2>

        <p className="text-lg leading-8">
          El proyecto busca optimizar la gestión de solicitudes de
          infraestructura mediante tecnologías Microsoft, automatizando la
          clasificación y creación de tickets para mejorar la trazabilidad,
          reducir tiempos operativos y aumentar la eficiencia del proceso.
        </p>
      </section>

      {/* PROBLEMATICA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Problemática
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 shadow-lg rounded-xl bg-red-50">
              Solicitudes realizadas únicamente por chat.
            </div>

            <div className="p-6 shadow-lg rounded-xl bg-red-50">
              Falta de trazabilidad de las actividades.
            </div>

            <div className="p-6 shadow-lg rounded-xl bg-red-50">
              Actividades ejecutadas sin ticket formal.
            </div>

            <div className="p-6 shadow-lg rounded-xl bg-red-50">
              Riesgo de pérdida de información.
            </div>

          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="py-20 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Objetivos
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="font-bold text-2xl mb-4">
              Objetivo General
            </h3>

            <p>
              Automatizar el proceso de gestión de solicitudes de
              infraestructura utilizando Inteligencia Artificial Generativa.
            </p>

            <h3 className="font-bold text-2xl mt-8 mb-4">
              Objetivos Específicos
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Analizar mensajes recibidos desde Teams.</li>
              <li>Clasificar requerimientos automáticamente.</li>
              <li>Crear tickets en Azure DevOps.</li>
              <li>Generar trazabilidad de las actividades.</li>
            </ul>

          </div>
        </div>

      </section>

      {/* ARQUITECTURA */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Arquitectura de la Solución
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            <div className="bg-white shadow-lg rounded-xl p-6">
              Teams
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              Power Automate
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              IA Generativa
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              Azure DevOps
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              Outlook
            </div>

          </div>

        </div>

      </section>

      {/* FLUJO */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Flujo de Trabajo
          </h2>

          <ol className="space-y-4">

            <li>1. Recepción del mensaje desde Microsoft Teams.</li>

            <li>2. Captura automática mediante Power Automate.</li>

            <li>3. Interpretación por IA Generativa.</li>

            <li>4. Generación de JSON estructurado.</li>

            <li>5. Creación automática del ticket.</li>

            <li>6. Notificación al responsable.</li>

          </ol>

        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Tecnologías Utilizadas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6">
              Microsoft Teams
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              Power Automate
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              Azure DevOps
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              AI Builder
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              GitHub
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              GitHub Pages
            </div>

          </div>

        </div>

      </section>

      {/* DEVSECOPS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            DevSecOps y Seguridad
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            <div className="shadow rounded-xl p-6">
              GitHub
            </div>

            <div className="shadow rounded-xl p-6">
              Dependabot
            </div>

            <div className="shadow rounded-xl p-6">
              CodeQL
            </div>

            <div className="shadow rounded-xl p-6">
              Despliegue en GitHub Pages
            </div>

          </div>

        </div>

      </section>

      {/* RESULTADOS */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Resultados Esperados
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">

            <li>Reducción de tiempo en el registro de requerimientos.</li>

            <li>Mayor trazabilidad operativa.</li>

            <li>Automatización de procesos repetitivos.</li>

            <li>Control centralizado de solicitudes.</li>

            <li>Mejor gestión de infraestructura tecnológica.</li>

          </ul>

        </div>

      </section>

      {/* EQUIPO */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Equipo de Trabajo
          </h2>

          <div className="bg-slate-100 p-8 rounded-xl">

            <p>Isaac Londoño Cortés</p>

            <p>Proyecto Universitario</p>

            <p>2026</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-10">

        <h3 className="font-bold text-xl">
          Automatización Inteligente de Solicitudes de Infraestructura
        </h3>

        <p className="mt-3">
          Proyecto Académico - DevSecOps - IA Generativa
        </p>

      </footer>
    </main>
  );
}