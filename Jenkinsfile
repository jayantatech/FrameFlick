pipeline {
    agent any

    environment {
        // GLOBAL VALUES

        OS_HOME="/home/ubuntu"
        REGISTRY="jaybiswas"
        BRANCH="${BRANCH_NAME}"


        // PROJECT DETAILS 
        PROJECT="frame_flick"
        CONTAINER_NAME="frame_flick_${BRANCH}"
        IMAGE_NAME="frame_flick_${BRANCH}"
        IMAGE_TAG="${BRANCH}_${BUILD_NUMBER}"

        // CONTAINER DETAILS 
        
        CONTAINER_PORT="80"
        DEV_HOST_PORT="3001"
        QA_HOST_PORT="4001"


        BUILD_PATH="${OS_HOME}/BUILDS/${PROJECT}/${IMAGE_NAME}/${BRANCH}"
        CONFIG_PATH="${OS_HOME}/container-config/${BRANCH}/${IMAGE_NAME}"

        
        REMOTE_IMAGE="${REGISTRY}/${IMAGE_NAME}"

        // AWS 

        AWS_DEFAULT_REGION="us-east-1"
        // SECRET_MANAGER=""

        

    }

    stages {
        stage("Create the folders") {
            steps {
                sh """
                    echo "Creating the build path"
                    mkdir -p "${BUILD_PATH}"

                    echo "Creating the config path"
                    mkdir -p "${CONFIG_PATH}"

                    echo "Clearing the build path"

                    rm -rf ${BUILD_PATH:?}/*

                    echo "Copy workspace code to repo"

                    cp -R "${WORKSPACE}/." "${BUILD_PATH}"

                    rm -rf "${BUILD_PATH}/.git"

                    echo "Create the folders stage is completed"
                """

            }
        }

        stage("Building the image stage") {

            steps {
                sh """

                set -e

                cd "${BUILD_PATH}"

                echo "Remove the existing container"

                docker rm -f "${CONTAINER_NAME}" 2>/dev/null || true

                echo "Remove the existing docker image"

                echo "Building the docker image"
                
                EXISTING_IMAGES=$(docker images -q "${IMAGE_NAME}")
                if [ -n "${EXISTING_IMAGES}" ]; then
                    docker rmi -f ${EXISTING_IMAGES}
                    echo "Images cleared"
                fi

                echo "Building the docker image"
                docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .

                echo "new docker images got build"

                """
            }

        }


        stage("pushing to docker hub") {
            when{
                expression { return env.BRANCH == "qa" }
            }
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds',    
                    usernameVariable: 'DOCKER_USER',      
                    passwordVariable: 'DOCKER_PASS',
                )]) {

               sh """
                set -e

                echo "Login into docker"

                echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USER}" --password-stdin

                echo "Tagging image for Docker Hub..."

                docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${REMOTE_IMAGE}:${IMAGE_TAG}"
                docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${REMOTE_IMAGE}:latest"

                docker push "${REMOTE_IMAGE}:${IMAGE_TAG}"
                docker push "${REMOTE_IMAGE}:latest"

                echo "docker push is completed"

                echo "Docker logout"

                docker logout

                """
                }
            }

        }

        stage("Running the container") {
            steps {
                sh """

                set -e

                cd "${BUILD_PATH}"

                echo "Remove the existing container"

                echo "Checking the container existing port"

                if [ "${BRANCH}" == "dev" ]; then

                    EXISTING_CONTAINER=$(docker ps -aq --filter "publish=${DEV_HOST_PORT}")

                    if [ -n "${EXISTING_CONTAINER}" ]; then
                        docker rm -f ${EXISTING_CONTAINER}
                        echo "Existing container on port ${DEV_HOST_PORT} removed"
                    fi

                    echo "Running the container"

                    docker run -d -p "${DEV_HOST_PORT}:${CONTAINER_PORT}" --name "${CONTAINER_NAME}" --restart unless-stopped "${IMAGE_NAME}:${IMAGE_TAG}"

                    echo "Docker container is up and running on port ${DEV_HOST_PORT}"

                elif [ "${BRANCH}" == "qa" ]; then 

                    echo "Deploy to qa branch"

                     EXISTING_CONTAINER=$(docker ps -aq --filter "publish=${QA_HOST_PORT}")

                    if [ -n "${EXISTING_CONTAINER}" ]; then
                        docker rm -f ${EXISTING_CONTAINER}
                        echo "Existing container on port ${QA_HOST_PORT} removed"
                    fi

                    echo "Running the container"

                    docker pull "${REMOTE_IMAGE}:${IMAGE_TAG}" || { echo "Docker pull failed"; exit 1; }

                    echo "Running on qa branch"

                    docker run -d -p "${QA_HOST_PORT}:${CONTAINER_PORT}" --name "${CONTAINER_NAME}" --restart unless-stopped "${REMOTE_IMAGE}:${IMAGE_TAG}"

                else 
                    echo "unknown branch name ${BRANCH_NAME}"
                    exit 1
                fi



                """
            }
        }

        stage("clean up stage") {
            steps {
                sh """
                set -e

                echo "Removing all unused images cache..."
                docker image prune -af

                echo "Removing all unused build cache..."

                docker builder prune -af

                """

            }
        }
    }

    post{

        success {

            sh """

            echo "Everything is working on ${BRANCH}"

            """
        }
        failure {
            sh """
            echo "${BRANCH} deployment failed"

            """
        }

        always {
            sh """
                echo "Docker container status:"
                docker ps -a || true

            """
        }
    }


}