package br.com.docesdalu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan(basePackages = "br.com.docesdalu")
public class DocesdaluApplication {

	public static void main(String[] args) {
		SpringApplication.run(DocesdaluApplication.class, args);
	}

}
