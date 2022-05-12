FROM ros:foxy-ros-base
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
RUN curl -SL https://deb.nodesource.com/setup_16.x | bash \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG USERNAME=appuser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
USER $USERNAME

RUN echo "\n\
echo 'Sourcing ROS2 packages...'\n\
source /opt/ros/foxy/setup.sh \n\
" >> $HOME/.bashrc
