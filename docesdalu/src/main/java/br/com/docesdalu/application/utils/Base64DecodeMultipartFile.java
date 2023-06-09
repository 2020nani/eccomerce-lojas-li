package br.com.docesdalu.application.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Slf4j
public class Base64DecodeMultipartFile implements MultipartFile {
    private final byte[] imgContent;
    private final String header;

    public Base64DecodeMultipartFile(byte[] imgContent, String header) {
        this.imgContent = imgContent;
        this.header = header.split(";")[0];
    }

    @Override
    public String getName() {
        return System.currentTimeMillis() + Math.random() + "." + header.split("/")[1];
    }

    @Override
    public String getOriginalFilename() {
        return System.currentTimeMillis() + (int) Math.random() * 10000 + ".jpg";
    }

    @Override
    public String getContentType() {
        return header.split(":")[1];
    }

    @Override
    public boolean isEmpty() {
        return imgContent == null || imgContent.length == 0;
    }

    @Override
    public long getSize() {
        return imgContent.length;
    }

    @Override
    public byte[] getBytes() {

        try {
            return imgContent;
        }catch (Exception e){
            log.error("Erro ao pegar bytes da imagem");
        }
        return (null);
    }

    @Override
    public InputStream getInputStream(){
        return new ByteArrayInputStream(imgContent);
    }

    @Override
    public void transferTo(File dest){
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(dest);
            fileOutputStream.write(imgContent);
            fileOutputStream.close();
        }catch (IOException e){
            log.error("Erro ao gerar fileoutputstream");
            throw new IllegalArgumentException("Erro ao gerar fileoutputstream",null);
        }

    }
}

