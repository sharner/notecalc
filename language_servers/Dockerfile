FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

ARG USER_ID
ARG GROUP_ID

# Install apt dependencies
RUN apt-get update && apt-get install -y \
    git \
    nodejs \
    npm \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgl1-mesa-glx \
    lsb-release \
    libfreetype6-dev \
    gpg-agent \
    python3-cairocffi \
    protobuf-compiler \
    python3-pil \
    python3-lxml \
    python3-tk \
    python3-pip \
    vim \
    wget \
    clangd-9 \
    curl \
    texlive-latex-extra \
    texlive-science \
    && update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-9 100

# Install latex language server dependencies and vim package manager



# Simple root password in case we want to customize the container
RUN echo "root:root" | chpasswd

RUN useradd -G video,audio -ms /bin/bash --uid $USER_ID user

RUN apt-get update && \
      apt-get -y install sudo

RUN echo "user:user" | chpasswd && adduser user sudo

WORKDIR /workspace

COPY . /workspace

# Link the .vimrc file and install package manager
RUN ln -s /workspace/vimrc /home/user/.vimrc \
    && curl -fLo /home/user/.vim/autoload/plug.vim --create-dirs \
        https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim \
    && chown -R user /home/user

RUN cd /workspace && pip3 install -r requirements.txt \
    && python3 -m pip install --upgrade pip

USER user

CMD ["/bin/bash"]

