package utils

import (
	"io"
	"log"
	"os"
)

func SetLogger() error {
	_, err := os.Stat("log")
	if os.IsNotExist(err) {
		os.Mkdir("log", os.ModePerm)
	}

	logFile, err := os.OpenFile("log/application.log", os.O_RDWR|os.O_APPEND|os.O_CREATE, os.ModePerm)
	if err != nil {
		return err
	}

	mw := io.MultiWriter(logFile, os.Stdout)
	log.SetOutput(mw)
	return nil
}
