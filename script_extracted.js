
    // ============================
    // CONFIGURACIÓN DE PROYECTOS
    // ============================
    const projects = [
      {
        id: "facturador",
        name: "Facturador Innvida",
        type: "Facturador",
        tagClass: "facturador",
        progress15: 90,
        progressMonth: 90,
        estimatedDays: 30,
        showPhone: false,
        pendingSummary: "Falta programación consolidada del timbrado.",
        tasks: [
          { title: "Diseñar modelo de datos CFDI 4.0 (clientes, productos, impuestos)", tag: "backend", area: "Arquitectura y base de datos" },
          { title: "Implementar servicio de cálculo de impuestos (IVA, retenciones, descuentos)", tag: "backend", area: "Lógica de negocio" },
          { title: "Validar RFC, uso de CFDI, método y forma de pago contra catálogos SAT", tag: "backend", area: "Validaciones fiscales" },
          { title: "Crear módulo de previsualización de PDF antes de timbrar", tag: "frontend", area: "UI timbrado" },
          { title: "Integrar PAC de timbrado en ambiente sandbox", tag: "devops", area: "Integraciones externas" },
          { title: "Configurar carga de logo y datos fiscales por unidad de negocio", tag: "frontend", area: "Configuración multi-sucursal" },
          { title: "Generar descarga masiva de XML/PDF por rango de fechas", tag: "backend", area: "Reportes y consultas" },
          { title: "Implementar bitácora de timbrado y manejo de errores", tag: "devops", area: "Observabilidad" },
          { title: "Consolidar programación final del timbrado", tag: "backend", area: "Pendiente crítico" },
          { title: "Validación integral de flujo de timbrado end-to-end", tag: "devops", area: "QA final" }
        ],
      },
      {
        id: "nomad_app",
        name: "App móvil Nomad (pacientes / KAM)",
        type: "App móvil",
        tagClass: "nomad",
        progress15: 90,
        progressMonth: 90,
        estimatedDays: 90,
        showPhone: true,
        pendingSummary: "Faltan memopoints y comisiones.",
        tasks: [
          { title: "Definir flujo principal: onboarding, registro de estudio, seguimiento", tag: "mobile", area: "UX / producto" },
          { title: "Implementar login con Firebase Auth (correo y contraseña)", tag: "mobile", area: "Seguridad y acceso" },
          { title: "Conectar app móvil con colección actual de Firestore (formulario Nomad)", tag: "backend", area: "Sincronización de datos" },
          { title: "Habilitar envío offline con reintento cuando regrese la conexión", tag: "mobile", area: "Experiencia en campo" },
          { title: "Crear pantalla de detalle de paciente / estudio con línea de tiempo", tag: "mobile", area: "UI clínica" },
          { title: "Integrar lector de código QR para vincular órdenes de estudio", tag: "mobile", area: "Funcionalidad avanzada" },
          { title: "Configurar notificaciones push para cambios de estatus", tag: "devops", area: "Firebase Cloud Messaging" },
          { title: "Pruebas en dispositivos Android/iOS y corrección de bugs visuales", tag: "mobile", area: "QA" },
          { title: "Implementar memopoints en la app", tag: "mobile", area: "Gamificación" },
          { title: "Configurar comisiones establecidas por operación", tag: "backend", area: "Modelo comercial" }
        ],
      },
      {
        id: "sanare_app",
        name: "App móvil Sanaré (KAM / médicos)",
        type: "App móvil",
        tagClass: "sanare",
        progress15: 85,
        progressMonth: 85,
        estimatedDays: 75,
        showPhone: true,
        pendingSummary: "Faltan memopoints, comisiones establecidas y pulsera Sanaré.",
        tasks: [
          { title: "Diseñar pantallas: home KAM, listado de médicos, registro rápido", tag: "mobile", area: "Diseño de interfaz" },
          { title: "Integrar login seguro para KAM (Firebase Auth + roles)", tag: "backend", area: "Seguridad" },
          { title: "Traer base de médicos (Firebase / Google Sheets) con filtros por aseguradora", tag: "backend", area: "Integración de datos" },
          { title: "Conectar app con módulo de cotizaciones Sanaré para registrar solicitudes", tag: "backend", area: "Integraciones internas" },
          { title: "Agregar sección de seguimiento por médico (última prueba, aseguradora, KAM)", tag: "mobile", area: "Gestión comercial" },
          { title: "Implementar indicadores rápidos en móvil (cotizaciones por KAM / mes)", tag: "frontend", area: "Analytics ligero" },
          { title: "Notificaciones para recordatorio de seguimientos pendientes >15 días", tag: "devops", area: "Automatización" },
          { title: "Pruebas en campo con KAM (3–5 usuarios piloto) y levantamiento de feedback", tag: "research", area: "Validación funcional" },
          { title: "Implementar memopoints en la experiencia móvil", tag: "mobile", area: "Gamificación" },
          { title: "Configurar comisiones establecidas por flujo comercial", tag: "backend", area: "Modelo comercial" },
          { title: "Integrar pulsera Sanaré con seguimiento clínico", tag: "iot", area: "Integración wearable" },
          { title: "Ajustar tableros y visualización clínica final", tag: "frontend", area: "QA visual" }
        ],
      },
      {
        id: "web_sites",
        name: "Sitios web Sanaré / Nomad",
        type: "Web / Landing",
        tagClass: "ti",
        progress15: 100,
        progressMonth: 100,
        estimatedDays: 45,
        showPhone: false,
        pendingSummary: "Proyecto concluido.",
        tasks: [
          { title: "Refactorizar landing Sanaré y Nomad a componentes reutilizables", tag: "frontend", area: "Arquitectura frontend" },
          { title: "Optimizar tiempos de carga (imágenes, fuentes, Lighthouse > 85)", tag: "frontend", area: "Performance" },
          { title: "Actualizar secciones de servicios oncológicos y pruebas genómicas", tag: "frontend", area: "Contenido" },
          { title: "Agregar sección de historias de éxito / casos clínicos", tag: "frontend", area: "Marketing" },
          { title: "Configurar despliegue automático desde GitHub a Vercel / GitHub Pages", tag: "devops", area: "CI/CD" },
          { title: "Integrar formularios de contacto con n8n / Firebase para leads", tag: "backend", area: "Captura de leads" }
        ],
      },
      {
        id: "pulsera_iot",
        name: "Pulsera de monitoreo de pacientes",
        type: "IoT / Dispositivos",
        tagClass: "iot",
        progress15: 50,
        progressMonth: 50,
        estimatedDays: 120,
        showPhone: false,
        pendingSummary: "Proyecto en etapa media de desarrollo y validación.",
        tasks: [
          { title: "Definir variables a monitorear (FC, SpO2, temperatura, etc.)", tag: "research", area: "Alcance clínico" },
          { title: "Elegir hardware base de la pulsera (proveedor / SDK)", tag: "iot", area: "Selección tecnológica" },
          { title: "Diseñar API de ingesta de datos de la pulsera", tag: "backend", area: "Arquitectura IoT" },
          { title: "Definir esquema de almacenamiento (Firestore / BigQuery) por paciente", tag: "backend", area: "Modelo de datos" },
          { title: "Crear panel de monitoreo en tiempo real para equipo clínico", tag: "frontend", area: "Dashboard" },
          { title: "Configurar reglas de alerta cuando parámetros salen de rango", tag: "devops", area: "Alertas y notificaciones" },
          { title: "Prueba piloto con pacientes y análisis de estabilidad de la señal", tag: "research", area: "Validación piloto" },
          { title: "Ajustar integración clínica y alarmas", tag: "iot", area: "Optimización" }
        ],
      },
      {
        id: "infra_ti",
        name: "Infraestructura TI / Backups / VPN",
        type: "TI",
        tagClass: "ti",
        progress15: 95,
        progressMonth: 95,
        estimatedDays: 60,
        showPhone: false,
        pendingSummary: "Infraestructura casi concluida.",
        tasks: [
          { title: "Documentar topología actual (servidores, VPN, Firewalls, n8n, Firebase)", tag: "devops", area: "Inventario" },
          { title: "Definir estrategia 3-2-1 de backups para información crítica", tag: "devops", area: "Backups" },
          { title: "Automatizar respaldos de bases de datos y archivos hacia Google Drive / S3", tag: "devops", area: "Automatización" },
          { title: "Revisar políticas de acceso VPN (KAM, administración, desarrollo)", tag: "devops", area: "Seguridad" },
          { title: "Configurar monitoreo básico de servidores (CPU, RAM, espacio, servicios)", tag: "devops", area: "Monitoreo" },
          { title: "Auditar bitácoras, alertas y endurecimiento final", tag: "devops", area: "Cierre operativo" }
        ],
      },
      {
        id: "ecosistema_clinicas_sanare",
        name: "Ecosistema Clínicas Sanaré",
        type: "Operación clínica",
        tagClass: "sanare",
        progress15: 76,
        progressMonth: 76,
        estimatedDays: 95,
        showPhone: false,
        pendingSummary: "Se están automatizando hojas de servicio, transferencias y etiquetas.",
        tasks: [
          { title: "Automatizar hojas de servicio por unidad", tag: "backend", area: "Operación clínica" },
          { title: "Estandarizar flujo de transferencias internas", tag: "backend", area: "Trazabilidad" },
          { title: "Generar etiquetas automáticas por paciente y servicio", tag: "frontend", area: "Etiquetado" },
          { title: "Conectar capturas operativas con base central", tag: "backend", area: "Integración" },
          { title: "Diseñar vistas para enfermería, coordinación y administración", tag: "frontend", area: "Roles" },
          { title: "Validar operación en clínica piloto", tag: "research", area: "Implementación" },
          { title: "Ajustar formatos y evidencia documental", tag: "frontend", area: "Documentación" },
          { title: "Escalar automatizaciones al resto de sedes", tag: "devops", area: "Despliegue" }
        ],
      },
      {
        id: "cotizador_master_30",
        name: "Cotizador Master 3.0",
        type: "Comercial / Pricing",
        tagClass: "facturador",
        progress15: 15,
        progressMonth: 15,
        estimatedDays: 110,
        showPhone: false,
        pendingSummary: "Incluye precios de aseguradoras, doble cotización genérica/patente y productividad médica.",
        tasks: [
          { title: "Integrar precios de aseguradoras en tiempo real", tag: "backend", area: "Pricing" },
          { title: "Construir doble cotización genérica y patente", tag: "backend", area: "Motor de cotización" },
          { title: "Calcular productividad de médico por operación", tag: "backend", area: "Analítica" },
          { title: "Diseñar interfaz comercial para comparación inmediata", tag: "frontend", area: "UX" },
          { title: "Definir reglas de utilidad y escenarios de negociación", tag: "research", area: "Estrategia comercial" },
          { title: "Conectar exportables y reportes automáticos", tag: "devops", area: "Automatización" }
        ],
      },
      {
        id: "ecosistema_comercial",
        name: "Ecosistema Comercial",
        type: "CRM / Comercial",
        tagClass: "nomad",
        progress15: 10,
        progressMonth: 10,
        estimatedDays: 130,
        showPhone: false,
        pendingSummary: "Concentrará cotizaciones en tiempo real, guía comercial y cierre con trazabilidad hasta el pago.",
        tasks: [
          { title: "Registrar cotizaciones en tiempo real con monto y fecha/hora", tag: "backend", area: "Trazabilidad" },
          { title: "Integrar guía del comercial dentro de la herramienta", tag: "frontend", area: "Operación comercial" },
          { title: "Mostrar cómo químicos generan precios y cómo se validan", tag: "backend", area: "Flujo interno" },
          { title: "Registrar cierre aceptado o rechazado por cliente", tag: "backend", area: "Cierre" },
          { title: "Relacionar cierre con llegada del paciente y monto pagado", tag: "backend", area: "Conversión" },
          { title: "Crear tablero de indicadores para seguimiento comercial", tag: "frontend", area: "Analytics" }
        ],
      },
      {
        id: "infra_venta_mapeo",
        name: "Infraestructura de venta y mapeo comercial",
        type: "Prospección / CRM",
        tagClass: "ti",
        progress15: 5,
        progressMonth: 5,
        estimatedDays: 140,
        showPhone: false,
        pendingSummary: "Incluye mapeo de clientes potenciales, call center, correos por redes sociales, Python y seguimiento CRM.",
        tasks: [
          { title: "Mapear clientes potenciales por zona y segmento", tag: "research", area: "Prospección" },
          { title: "Integrar flujo de call center y seguimiento", tag: "backend", area: "Operación" },
          { title: "Automatizar correos captados desde redes sociales", tag: "devops", area: "Marketing" },
          { title: "Generar bases de datos mediante Python", tag: "backend", area: "Data pipeline" },
          { title: "Conectar seguimiento de clientes tipo CRM", tag: "frontend", area: "Visualización" },
          { title: "Definir indicadores de conversión y maduración", tag: "research", area: "Estrategia" }
        ],
      }
    ];

    const STORAGE_KEY = "tablero_proyectos_estado_v2";

    const viewRangeSelect = document.getElementById("view-range");
    const rangeLabel = document.getElementById("range-label");
    const container = document.getElementById("projects-container");
    const template = document.getElementById("project-card-template");

    const modalBackdrop = document.getElementById("tasks-modal");
    const modalCloseBtn = document.getElementById("tasks-modal-close");
    const modalProjectName = document.getElementById("tasks-modal-project-name");
    const modalSubtitle = document.getElementById("tasks-modal-subtitle");
    const modalTasksOl = document.getElementById("tasks-list-ol");
    const modalCount = document.getElementById("tasks-modal-count");
    const exportJsonBtn = document.getElementById("export-json-btn");

    let currentRange = "15";
    let currentModalProjectId = null;

    function buildInitialState() {
      const initialState = {};
      projects.forEach((project) => {
        const taskCount = project.tasks.length;
        const desiredPct = project.progress15 || 0;
        const doneCount = Math.round((desiredPct / 100) * taskCount);
        initialState[project.id] = project.tasks.map((_, index) => index < doneCount);
      });
      return initialState;
    }

    function getStoredState() {
      try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (parsed && typeof parsed === "object") {
          return normalizeState(parsed);
        }
      } catch (error) {
        console.warn("No se pudo leer el estado guardado:", error);
      }
      const initial = buildInitialState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial, null, 2));
      return initial;
    }

    function normalizeState(rawState) {
      const normalized = {};
      projects.forEach((project) => {
        const incoming = Array.isArray(rawState[project.id]) ? rawState[project.id] : [];
        normalized[project.id] = project.tasks.map((_, idx) => Boolean(incoming[idx]));
      });
      return normalized;
    }

    let projectState = getStoredState();

    function persistState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projectState, null, 2));
    }

    function getProjectCompletion(projectId) {
      const taskState = projectState[projectId] || [];
      const total = taskState.length;
      const done = taskState.filter(Boolean).length;
      const percent = total ? Math.round((done / total) * 100) : 0;
      return { done, total, percent };
    }

    function getStatusFromProgress(pct) {
      if (pct >= 75) return { text: "En verde", dotClass: "success" };
      if (pct >= 40) return { text: "Atención", dotClass: "mid" };
      return { text: "Riesgo", dotClass: "risk" };
    }

    function refreshProjectCard(project) {
      const card = container.querySelector(`[data-project-id="${project.id}"]`);
      if (!card) return;

      const progressEl = card.querySelector(".progress-percent");
      const tasksDoneEl = card.querySelector(".tasks-done");
      const tasksTotalEl = card.querySelector(".tasks-total");
      const progressBarFill = card.querySelector(".progress-bar-fill");
      const runnerImg = card.querySelector(".runner-img");
      const runnerPercentEl = card.querySelector(".runner-percent");
      const statusDot = card.querySelector(".status-dot");
      const statusText = card.querySelector(".status-text");

      const completion = getProjectCompletion(project.id);
      progressEl.textContent = completion.percent + "%";
      tasksDoneEl.textContent = completion.done;
      tasksTotalEl.textContent = completion.total;
      progressBarFill.style.width = completion.percent + "%";
      runnerPercentEl.textContent = completion.percent + "%";

      const minPos = 6;
      const maxPos = 94;
      const pos = minPos + ((maxPos - minPos) * completion.percent) / 100;
      runnerImg.style.left = pos + "%";

      const status = getStatusFromProgress(completion.percent);
      statusText.textContent = status.text;
      statusDot.className = "status-dot " + status.dotClass;
    }

    function openTasksModal(project) {
      currentModalProjectId = project.id;
      modalProjectName.textContent = project.name;
      modalSubtitle.textContent = `${project.pendingSummary} Cada punto es manipulable y actualiza el avance real del tablero.`;
      modalTasksOl.innerHTML = "";

      const state = projectState[project.id] || [];

      project.tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = project.id + "_task_" + index;
        checkbox.checked = Boolean(state[index]);

        checkbox.addEventListener("change", () => {
          projectState[project.id][index] = checkbox.checked;
          persistState();
          updateModalCount(project.id);
          refreshProjectCard(project);
        });

        const main = document.createElement("div");
        main.className = "task-main";

        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = task.title;

        const meta = document.createElement("div");
        meta.className = "task-meta";

        if (task.tag) {
          const tagSpan = document.createElement("span");
          tagSpan.className = "task-tag " + task.tag;
          tagSpan.textContent = task.tag.toUpperCase();
          meta.appendChild(tagSpan);
        }

        if (task.area) {
          const areaSpan = document.createElement("span");
          areaSpan.textContent = task.area;
          meta.appendChild(areaSpan);
        }

        main.appendChild(title);
        main.appendChild(meta);

        li.appendChild(checkbox);
        li.appendChild(main);
        modalTasksOl.appendChild(li);
      });

      updateModalCount(project.id);
      modalBackdrop.classList.add("active");
    }

    function updateModalCount(projectId) {
      const completion = getProjectCompletion(projectId);
      modalCount.textContent = `${completion.done} de ${completion.total} tareas marcadas como completadas. JSON guardado localmente y avance actualizado.`;
    }

    function closeTasksModal() {
      modalBackdrop.classList.remove("active");
      currentModalProjectId = null;
    }

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeTasksModal();
    });

    modalCloseBtn.addEventListener("click", () => {
      closeTasksModal();
    });

    function renderCards(range) {
      currentRange = range;
      container.innerHTML = "";

      projects.forEach((p) => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".project-card");
        card.dataset.projectId = p.id;

        const nameEl = card.querySelector(".project-name");
        const tagEl = card.querySelector(".project-tag");
        const durationDaysEl = card.querySelector(".duration-days");
        const durationMonthsEl = card.querySelector(".duration-months");
        const phonePreviewEl = card.querySelector(".phone-preview");
        const phoneAppNameEl = card.querySelector(".phone-app-name");
        const phoneAppSubEl = card.querySelector(".phone-app-sub");
        const tasksButton = card.querySelector(".tasks-button");

        nameEl.textContent = p.name;
        tagEl.textContent = p.type;
        if (p.tagClass) tagEl.classList.add(p.tagClass);

        const estimatedDays = p.estimatedDays || 0;
        const estimatedMonths = estimatedDays / 30;
        if (durationDaysEl) durationDaysEl.textContent = estimatedDays;
        if (durationMonthsEl) durationMonthsEl.textContent = estimatedMonths.toFixed(1);

        if (p.showPhone && phonePreviewEl) {
          phonePreviewEl.style.display = "flex";
          if (phoneAppNameEl) phoneAppNameEl.textContent = p.name;
          if (phoneAppSubEl) phoneAppSubEl.textContent = p.type + " / vista móvil";
        }

        if (tasksButton) {
          tasksButton.addEventListener("click", () => {
            openTasksModal(p);
          });
        }

        container.appendChild(card);
        refreshProjectCard(p);
      });
    }

    viewRangeSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      rangeLabel.textContent = value === "15" ? "Últimos 15 días" : "Este mes";
      renderCards(value);
    });

    exportJsonBtn.addEventListener("click", () => {
      const payload = projects.map((project) => {
        const completion = getProjectCompletion(project.id);
        return {
          id: project.id,
          nombre: project.name,
          tipo: project.type,
          avance: completion.percent,
          tareasCompletadas: completion.done,
          tareasTotales: completion.total,
          pendiente: project.pendingSummary,
          estadoTareas: (projectState[project.id] || []).map((checked, idx) => ({
            titulo: project.tasks[idx].title,
            completada: checked,
            area: project.tasks[idx].area || "",
            tag: project.tasks[idx].tag || ""
          }))
        };
      });

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "avance-proyectos.json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });

    renderCards("15");
  