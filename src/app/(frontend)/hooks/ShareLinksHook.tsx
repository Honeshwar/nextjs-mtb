import { useState } from "react";

export function useShareLinks() {
  const [whatsapp_link, setWhatsapp_link] = useState("");
  const [facebook_link, setFacebook_link] = useState("");
  const [twitter_link, setTwitter_link] = useState("");
  return {
    whatsapp_link,
    setWhatsapp_link,
    facebook_link,
    setFacebook_link,
    twitter_link,
    setTwitter_link,
  };
}
