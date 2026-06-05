pipeline {
    agent any

    environment {
        // GLOBAL VALUES

        OS_HOME="/home/ubuntu"
        // REGISTRY=""
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

        // AWS 

        AWS_DEFAULT_REGION="us-east-1"
        // SECRET_MANAGER=""

        

    }

    stages {
        stage("Create the folders") {
            steps {
                sh '''
                    echo "Creating the build path"
                    mkdir -p "${BUILD_PATH}"

                    echo "Creating the config path"
                    mkdir -p "${CONFIG_PATH}"

                    echo "Clearing the build path"

                    rm -rf "${BUILD_PATH:?}/"*

                    echo "Copy workspace code to repo"

                    cp -R "${WORKSPACE}/." "${BUILD_PATH}"

                    rm -rf "${BUILD_PATH}/.git"

                    echo "Create the folders stage is completed"
                '''

            }
        }

        stage("Building the image stage") {

            steps {
                sh '''

                set -e

                cd "${BUILD_PATH}"

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

                '''
            }

        }

        stage("Running the container") {
            steps {
                sh '''

                set -e

                cd "${BUILD_PATH}"

                echo "Remove the existing container"

                docker rm -f "${CONTAINER_NAME}" 2>/dev/null || true 

                echo "Checking the container existing port"

                EXISTING_CONTAINER=$(docker ps -aq --filter "publish=${DEV_HOST_PORT}")

                if [ -n "${EXISTING_CONTAINER}" ]; then
                    docker rm -f ${EXISTING_CONTAINER}
                    echo "Existing container on port ${DEV_HOST_PORT} removed"
                fi

                echo "Running the container"

                docker run -d -p "${DEV_HOST_PORT}:${CONTAINER_PORT}" --name "${CONTAINER_NAME}" --restart unless-stopped "${IMAGE_NAME}:${IMAGE_TAG}"

                echo "Docker container is up and running on port ${DEV_HOST_PORT}"

                '''
            }
        }

        stage("clean up stage") {
            steps {
                sh '''
                set -e

                echo "Removing all unused images cache..."
                docker images prune -af

                echo "Removing all unused build cache..."

                docker builder prune -af

                '''

            }
        }
    }

    post{

        success {

            sh '''

            echo "Everything is working on ${BRANCH}"

            '''
        }
        failure {
            sh '''
            echo "${BRANCH} deployment failed"

            '''
        }

        always {
            sh '''
                echo "Docker container status:"
                docker ps -a || true

            '''
        }
    }


}