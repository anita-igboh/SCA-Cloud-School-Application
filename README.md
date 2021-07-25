# SCA-Cloud-School-Application

-download docker
-create a docker account and a docker repo
-create repo on github and include a readme
-clone repo into folder : git clone https://github.com/anita-igboh/SCA-Cloud-School-Application.git
-checkout to a new branch called 'Start'
-Create dockerfile and index.html file with the commands 'vi index.html' and 'vi Dockerfile'.
-Add to dockerfile to setup ngix web server on ubuntu: 
    FROM ubuntu
    RUN apt-get update
    RUN apt-get install nginx -y
    COPY index.html /var/www/html/
    EXPOSE 80
    CMD ["nginx","-g","daemon off;"]
-stop the docker using the container id to be able to edit index.html file
-checkout to feature branch to edit index.html
-Send build context to docker daemon: docker build -t sca
-Build docker image and run the container
-pushed changes to github,merged feature and start branch



Docker link: https://hub.docker.com/r/arhneetah/sca-docker