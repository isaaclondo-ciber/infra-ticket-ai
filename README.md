# Infra Ticket AI · Landing

Landing del proyecto que convierte solicitudes de infraestructura enviadas por Microsoft Teams en tickets de Azure DevOps con IA generativa (Power Automate + AI Builder).

Proyecto Integrador · Emprendimiento de Base Tecnológica · Politécnico Grancolombiano · 2026-2.

![CI](https://github.com/isaaclondo-ciber/infra-ticket-ai/actions/workflows/ci.yml/badge.svg)
![Despliegue](https://github.com/isaaclondo-ciber/infra-ticket-ai/actions/workflows/deploy.yml/badge.svg)

Producción: https://isaaclondo-ciber.github.io/infra-ticket-ai/

## Estructura

```
.
├── app/                        landing (Next.js 16 + Tailwind 4, export estático)
│   ├── layout.tsx              título, idioma, fuentes y CSP en meta
│   ├── page.tsx                contenido
│   └── globals.css
├── next.config.ts              export estático para GitHub Pages
├── sonar-project.properties    configuración de SonarCloud
├── tests/
│   ├── selenium/               pruebas funcionales (pytest + .side de Selenium IDE)
│   └── jmeter/                 plan de carga de 100 usuarios
├── .zap/rules.tsv              reglas de OWASP ZAP
└── .github/
    ├── dependabot.yml          actualizaciones semanales de dependencias
    └── workflows/
        ├── ci.yml              lint, build, Selenium y SonarCloud en cada PR
        └── deploy.yml          publica en Pages y corre JMeter y ZAP contra la URL
```

## Pipeline

1. Se abre un pull request a `main`. `ci.yml` corre lint, genera el export estático, lo sirve bajo `/infra-ticket-ai` igual que Pages, corre Selenium y manda el código a SonarCloud. Si algo falla, el PR queda en rojo.
2. Al hacer merge, `ci.yml` corre otra vez sobre `main`. Si termina en verde, `deploy.yml` publica la carpeta `out/` en GitHub Pages.
3. Con el sitio publicado, `deploy.yml` lanza JMeter (100 usuarios en 10 s) y ZAP contra la URL. El job de ZAP falla si aparece una alerta de riesgo alto. Los reportes quedan como artefactos de la ejecución.

GitHub Pages no permite cabeceras HTTP propias. La CSP y la Referrer-Policy van en etiquetas meta (`app/layout.tsx`); las alertas de ZAP que quedan por cabeceras están explicadas en `.zap/rules.tsv`.

## Correr en local

```bash
npm ci
npm run dev            # http://localhost:3000
```

Selenium (necesita Google Chrome), sobre el export estático:

```bash
npm run build
python3 -m http.server 3000 -d out &
python3 -m venv .venv && source .venv/bin/activate
pip install -r tests/selenium/requirements.txt
BASE_URL=http://localhost:3000 pytest tests/selenium -v
```

JMeter contra la landing local:

```bash
jmeter -n -t tests/jmeter/carga-landing.jmx -Jhost=localhost -Jprotocolo=http -Jpuerto=3000 \
  -l tests/jmeter/resultados/r.jtl -e -o tests/jmeter/reporte
```

ZAP contra producción (Docker o Podman):

```bash
docker run --rm -v "$PWD/.zap:/zap/wrk:rw" -t ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py -t https://isaaclondo-ciber.github.io/infra-ticket-ai/ -c rules.tsv -I
```

## Configuración fuera del repo

| Dónde | Qué |
|---|---|
| GitHub › Settings › Secrets › Actions | Secreto `SONAR_TOKEN` |
| GitHub › Settings › Code security | CodeQL en Default setup |
| SonarCloud › Administration › Analysis Method | Automatic Analysis apagado |
| GitHub › Settings › Pages | Source: GitHub Actions |
