
#FROM ubuntu:latest
#
#RUN apt-get update && \
#    apt-get install -y curl gnupg && \
#    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
#    apt-get install -y nodejs
#FROM maven:3.8.6-amazoncorretto-17 AS build
#LABEL authors="sterz"
#WORKDIR /
#COPY pom.xml /
#COPY src /src
#RUN mvn clean package -Pproduction -DskipTests -Dvaadin.ignoreVersionChecks=true

FROM openjdk:17-jdk-slim

#COPY /target/futurex-1.0-SNAPSHOT.jar /futurex.jar
EXPOSE 8150
ENTRYPOINT ["java","-jar","futurex-1.0-SNAPSHOT.jar"]