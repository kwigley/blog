{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  packages = [ pkgs.bun pkgs.biome ];
  NEXT_PUBLIC_SITE_URL="https://kylewigs.com";
}
