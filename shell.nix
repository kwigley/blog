{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  packages = [ pkgs.bun pkgs.biome ];
  NEXT_PUBLIC_SITE_URL="https://kylewigs.com";
  CLOUDFLARE_API_TOKEN="8QrZ4b-2hZHA9Np8-U2WG1W1wL6GSt89e1JKQzqT";
}
