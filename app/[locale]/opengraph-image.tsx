import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AGCE — Cabinet Comptable Professionnel à Lomé, Togo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const tagline =
    locale === "en"
      ? "Professional Accounting Firm in Lomé, Togo"
      : locale === "ee"
        ? "Ga Ƒe Nuŋɔŋlɔ Ƒe Dɔwɔƒe le Lomé, Togo"
        : "Cabinet Comptable Professionnel à Lomé, Togo";

  const cta =
    locale === "en"
      ? "First consultation free"
      : locale === "ee"
        ? "Gbãtɔ ƒe kpɔɖeŋu mana fe o"
        : "1er rendez-vous conseil offert";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0f1e 0%, #111829 50%, #0a0f1e 100%)",
          position: "relative",
        }}
      >
        {/* Gold border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          }}
        />

        {/* Logo diamond */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            height: 70,
            border: "3px solid #c9a84c",
            transform: "rotate(45deg)",
            marginBottom: 30,
          }}
        >
          <span
            style={{
              color: "#c9a84c",
              fontSize: 32,
              fontWeight: 700,
              transform: "rotate(-45deg)",
            }}
          >
            A
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#f8f6f0",
            letterSpacing: "0.05em",
            marginBottom: 8,
          }}
        >
          AGCE
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: "#8a9ab5",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Assistance de Gestion Comptable des Entreprises
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#c9a84c",
            marginBottom: 30,
          }}
        >
          {tagline}
        </div>

        {/* CTA badge */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            border: "1px solid rgba(201, 168, 76, 0.4)",
            borderRadius: 30,
            fontSize: 18,
            color: "#e8c97a",
          }}
        >
          {cta}
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 14,
            color: "#8a9ab5",
          }}
        >
          Lomé, Togo — +228 97 55 09 77
        </div>
      </div>
    ),
    { ...size }
  );
}
