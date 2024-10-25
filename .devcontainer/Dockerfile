FROM mcr.microsoft.com/devcontainers/rust:1-1-bullseye

RUN cd / \ 
  && git clone https://github.com/getzola/zola.git \
  && cd zola \
  && cargo install --path . --locked

EXPOSE 1111/tcp
EXPOSE 1111/udp

