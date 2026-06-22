import { RenderableProps } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { StashView } from "../stash/StashView";
import "./Navigation.css";
import { Collection } from "../collection/Collection";
import { SaveFiles } from "../save-files/SaveFiles";
import { Catalog } from "../catalog/Catalog";
import { Transfer } from "../transfer/Transfer";
import { Help } from "../help/Help";
import { Settings } from "../settings/Settings";
import { BufferContext } from "../store/BufferContext";

function NavLink({
  hash,
  isHome,
  children,
}: RenderableProps<{ hash: string; isHome?: boolean }>) {
  const isActive = location.hash === hash || (isHome && location.hash === "");
  return (
    <a class={isActive ? "nav-link active" : "nav-link"} href={hash}>
      {children}
    </a>
  );
}

export function Routes() {
  const [currentHash, setCurrentHash] = useState(location.hash);
  const { items: transferItems } = useContext(BufferContext);

  useEffect(() => {
    const listener = () => setCurrentHash(location.hash);
    window.addEventListener("hashchange", listener);
    return () => window.removeEventListener("hashchange", listener);
  }, []);

  const view = useMemo(() => {
    switch (currentHash) {
      case "#saves":
        return <SaveFiles />;
      case "#collection":
        return <Collection />;
      case "#characters":
        return <StashView />;
      case "#catalog":
        return <Catalog />;
      case "#transfer":
        return <Transfer />;
      case "#settings":
        return <Settings />;
      case "#help":
      default:
        return <Help />;
    }
  }, [currentHash]);

  return (
    <>
      <nav id="navigation" data-nosnippet={true}>
        <NavLink hash="#saves">Save files</NavLink>
        <NavLink hash="#collection">Collection</NavLink>
        <NavLink hash="#characters">Characters</NavLink>
        <NavLink hash="#catalog">Catalog</NavLink>
        <NavLink hash="#transfer">
          Transfer {transferItems.length ? transferItems.length : ""} items
        </NavLink>
        <NavLink hash="#settings">Settings</NavLink>
      </nav>
      <main>{view}</main>
    </>
  );
}
