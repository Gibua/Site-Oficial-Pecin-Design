import { Instagram, Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/seu_usuario",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/seu_perfil",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/seu_usuario",
      color: "hover:text-blue-400",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com/seu_usuario",
      color: "hover:text-pink-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/seu_usuario",
      color: "hover:text-foreground",
    },
  ];

  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me acompanhe pelas redes sociais
          </h2>
          <p className="text-muted-foreground">
            Fique por dentro dos meus projetos e novidades
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 md:gap-8 animate-fade-up">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-300 ${social.color}`}
              aria-label={social.name}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background border-2 border-border flex items-center justify-center group-hover:scale-110 group-hover:border-current transition-all duration-300 shadow-sm hover:shadow-lg">
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
