"use client";
import { FC, useEffect } from "react";
import * as FathomClient from "fathom-client";

export const Fathom: FC = () => {
  useEffect(() => {
    FathomClient.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: [process.env.NEXT_PUBLIC_DOMAIN_NAME],
      honorDNT: true,
    });
  }, []);

  return null;
};
