import React from "react";
import { Link } from "react-router";

// ─── Shared inner flip structure ───────────────────────────────────────────
//  The outer element must carry the `group` class (added in BASE).
//  Text-1 slides up on group-hover; Text-2 slides in from below.

interface FlipInnerProps {
  children: React.ReactNode;
  /** Extra classes for the content spans, e.g. "gap-2.5" for icon+text buttons */
  innerClassName?: string;
}

function FlipInner({ children, innerClassName = "" }: FlipInnerProps) {
  const EASE = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";
  const base = `absolute inset-0 flex items-center justify-center ${innerClassName}`;

  return (
    <>
      {/* Invisible spacer — preserves the button's natural width/height */}
      <span
        aria-hidden="true"
        className={`inline-flex items-center ${innerClassName}`}
        style={{ visibility: "hidden" }}
      >
        {children}
      </span>

      {/* Text 1 — visible; slides up on hover */}
      <span
        className={`${base} transition-transform duration-300 ${EASE} group-hover:-translate-y-full`}
      >
        {children}
      </span>

      {/* Text 2 — hidden below; slides to center on hover */}
      <span
        className={`${base} translate-y-full transition-transform duration-300 ${EASE} group-hover:translate-y-0`}
      >
        {children}
      </span>
    </>
  );
}

// ─── Base classes every ButtonFlip shares ─────────────────────────────────
const BASE =
  "group overflow-hidden relative inline-flex items-center justify-center transition-all duration-300 hover:scale-[0.97]";

// ─── Prop types ────────────────────────────────────────────────────────────
interface SharedProps {
  /** Extra classes on the outer element (bg, text color, padding, radius…) */
  className?: string;
  /** Extra classes forwarded to the inner content spans (e.g. "gap-2.5") */
  innerClassName?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface AnchorProps extends SharedProps {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface ButtonProps extends SharedProps {
  as?: "button";
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface LinkProps extends SharedProps {
  as: "link";
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonFlipProps = AnchorProps | ButtonProps | LinkProps;

// ─── Component ─────────────────────────────────────────────────────────────
export function ButtonFlip(props: ButtonFlipProps) {
  const { className = "", innerClassName = "", style, children } = props;
  const outerClass = `${BASE} ${className}`;

  if (props.as === "link") {
    return (
      <Link to={props.to} className={outerClass} style={style} onClick={props.onClick}>
        <FlipInner innerClassName={innerClassName}>{children}</FlipInner>
      </Link>
    );
  }

  if (props.as === "a") {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={outerClass}
        style={style}
        onClick={props.onClick}
      >
        <FlipInner innerClassName={innerClassName}>{children}</FlipInner>
      </a>
    );
  }

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={outerClass}
      style={style}
      onClick={props.onClick}
    >
      <FlipInner innerClassName={innerClassName}>{children}</FlipInner>
    </button>
  );
}
