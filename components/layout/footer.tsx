import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-8 px-6 md:px-12 relative z-10 mt-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon
                icon="solar:code-square-linear"
                width="24"
                height="24"
                className="text-accent"
              />
              <span className=" font-semibold text-lg uppercase text-foreground">
                UNAMBA Hack
              </span>
            </div>
            <p className="text-sm font-light text-muted max-w-xs leading-relaxed">
              Impulsando el desarrollo tecnológico, el talento estudiantil y la
              innovación de código abierto en la región de Apurímac.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">
              Recursos
            </h3>
            <ul className="space-y-3 text-sm font-light text-muted">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Plantillas de Issue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Guía de Despliegue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Proyectos Anteriores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">
              Comunidad
            </h3>
            <ul className="space-y-3 text-sm font-light text-muted">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm font-light text-muted">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-xs font-light text-muted">
          <p>
            Copyright © 2026 UNAMBA Hackatón. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" width="20" height="20" />
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Icon icon="mdi:twitter" width="20" height="20" />
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="Discord"
            >
              <Icon icon="mdi:discord" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
