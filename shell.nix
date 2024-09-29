{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  packages = [ pkgs.bun ];
  NEXT_PUBLIC_SITE_URL="https://kylewigs.com";
}
